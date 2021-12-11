var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { AuthenticationScreen } from '@bma98/fractal-auth-screen';
const fakeFunction = () => __awaiter(void 0, void 0, void 0, function* () { });
export function AuthenticationScreenFragment() {
    return (React.createElement(AuthenticationScreen, { emailPlaceholder: 'Email', passwordPlaceholder: 'Password', signInText: 'Sign In', signIn: fakeFunction, signUpText: 'Sign Up', signUp: fakeFunction, forgotPasswordText: 'Forgot your password?', resetPasswordText: 'Email sent', resetPasswordDescriptionText: 'We sent an email with instructions to reset your password', resetPassword: fakeFunction, byAcceptingTerms: 'By accepting our terms', and: 'and', termsAndConditions: 'Terms and Conditions', privacyPolicy: 'Privacy Policy' }));
}
//# sourceMappingURL=AuthenticationScreenFragment.js.map