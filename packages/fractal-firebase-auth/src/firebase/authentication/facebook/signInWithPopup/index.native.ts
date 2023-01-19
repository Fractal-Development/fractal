import auth from '@react-native-firebase/auth';
import { AuthenticationState, createAuthenticationState } from '../../../../types/AuthenticationState';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export async function facebookSignInWithPopup(): Promise<AuthenticationState> {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        throw Error('Something went wrong obtaining access token');
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    const userCredential = await auth().signInWithCredential(facebookCredential);
    return createAuthenticationState({
        firebaseUser: userCredential.user as unknown as FirebaseAuthTypes.User,
        loading: false,
        credential: userCredential as unknown as FirebaseAuthTypes.UserCredential
    });
}
