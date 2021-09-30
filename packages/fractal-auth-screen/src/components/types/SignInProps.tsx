import { AuthenticationTextProps } from './AuthenticationTextProps';

export interface SignInProps extends AuthenticationTextProps {
    onSignUpButtonPress?: () => void;
    onPasswordResetButtonPress?: () => void;
    signIn: (email: string, password: string) => Promise<void>;
    removeSignUpButton?: boolean;
}
