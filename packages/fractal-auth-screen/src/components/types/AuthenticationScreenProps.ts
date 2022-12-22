import { AuthenticationTextProps } from './AuthenticationTextProps';
import { SignUpProps } from './SignUpProps';
import { SignInProps } from './SignInProps';
import { PasswordResetProps } from './PasswordResetProps';

export interface AuthenticationScreenProps
    extends AuthenticationTextProps,
        Omit<SignUpProps, 'onSignInButtonPress'>,
        Omit<SignInProps, 'onSignUpButtonPress' | 'onPasswordResetButtonPress'>,
        Omit<PasswordResetProps, 'onSignInButtonPress'> {
    logo?: JSX.Element;
    removeAppleButton?: boolean;
    removeSocialMediaButtons?: boolean;
    background?: JSX.Element;
    footer?: JSX.Element;
    handleGoogleSignIn?: () => Promise<void>;
    handleFacebookSignIn?: () => Promise<void>;
    handleAppleSignIn?: () => Promise<void>;
    removeEmailFlow?: boolean;
}
