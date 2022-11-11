var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import auth from '@react-native-firebase/auth';
import { createAuthenticationState } from '../../../types/AuthenticationState';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
export function facebook() {
    return __awaiter(this, void 0, void 0, function* () {
        // Attempt login with permissions
        const result = yield LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }
        // Once signed in, get the users AccessToken
        const data = yield AccessToken.getCurrentAccessToken();
        if (!data) {
            throw Error('Something went wrong obtaining access token');
        }
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        const userCredential = yield auth().signInWithCredential(facebookCredential);
        return createAuthenticationState({
            firebaseUser: userCredential.user,
            loading: false,
            credential: userCredential
        });
    });
}
//# sourceMappingURL=index.native.js.map