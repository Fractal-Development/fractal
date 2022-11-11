var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAuthenticationState } from '../../../types/AuthenticationState';
import auth from '@react-native-firebase/auth';
import { appleAuth } from '@invertase/react-native-apple-authentication';
// This may not work on android, but you should probably comment that out anyways.
export function apple() {
    return __awaiter(this, void 0, void 0, function* () {
        // Start the sign-in request
        const appleAuthRequestResponse = yield appleAuth.performRequest({
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
        const userCredential = yield auth().signInWithCredential(appleCredential);
        return createAuthenticationState({
            firebaseUser: userCredential.user,
            loading: false,
            credential: userCredential
        });
    });
}
//# sourceMappingURL=index.native.js.map