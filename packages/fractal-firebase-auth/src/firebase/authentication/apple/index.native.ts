import { AuthenticationState, createAuthenticationState } from '../../../types/AuthenticationState';
import auth from '@react-native-firebase/auth';
import { appleAuth } from '@invertase/react-native-apple-authentication';

// This may not work on android, but you should probably comment that out anyways.
export async function apple(): Promise<AuthenticationState> {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
        throw Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    // Sign the user in with the credential
    const userCredential = await auth().signInWithCredential(appleCredential);
    return createAuthenticationState({
        firebaseUser: userCredential.user,
        loading: false,
        credential: userCredential
    });
}
