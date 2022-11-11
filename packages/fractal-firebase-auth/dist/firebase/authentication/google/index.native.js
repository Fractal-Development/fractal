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
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createAuthenticationState } from '../../../types';
export function google(androidID) {
    return __awaiter(this, void 0, void 0, function* () {
        GoogleSignin.configure({
            webClientId: androidID
        });
        // Get the users ID token
        const { idToken } = yield GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        const userCredential = yield auth().signInWithCredential(googleCredential);
        return createAuthenticationState({
            firebaseUser: userCredential.user,
            loading: false,
            credential: userCredential
        });
    });
}
//# sourceMappingURL=index.native.js.map