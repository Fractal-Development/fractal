import { AuthenticationTextProps } from './AuthenticationTextProps';
export interface PasswordResetProps extends AuthenticationTextProps {
    resetPassword: (email: string) => Promise<void>;
    onSignInButtonPress: () => void;
}
