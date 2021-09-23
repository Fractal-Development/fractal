import React, { ReactElement } from 'react';
import { AuthenticationScreen } from '@bma98/fractal-auth-screen';

const fakeFunction = async () => {
    return;
};

export function AuthenticationScreenFragment(): ReactElement {
    return (
        <AuthenticationScreen
            emailPlaceholder='Email'
            passwordPlaceholder='Password'
            signInText='Sign In'
            signIn={fakeFunction}
            signUpText='Sign Up'
            signUp={fakeFunction}
            forgotPasswordText='Forgot your password?'
            resetPasswordText='Email sent'
            resetPasswordDescriptionText='We sent an email with instructions to reset your password'
            resetPassword={fakeFunction}
            byAcceptingTerms='By accepting our terms'
            and='and'
            termsAndConditions='Terms and Conditions'
            privacyPolicy='Privacy Policy'
        />
    );
}
