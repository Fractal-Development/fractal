import { AuthenticationTextProps } from './AuthenticationTextProps';

export interface SignUpProps extends AuthenticationTextProps {
    onSignInButtonPress?: () => void;
    onTermsButtonPressed?: () => void;
    onPrivacyButtonPressed?: () => void;
    signUp: (email: string, password: string) => Promise<void>;
}
