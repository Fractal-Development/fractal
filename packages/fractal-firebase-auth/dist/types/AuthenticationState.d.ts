import { FirebaseAuthTypes } from '@react-native-firebase/auth';
export interface AuthenticationState {
    firebaseUser: FirebaseAuthTypes.User | undefined | null;
    loading: boolean;
    credential: FirebaseAuthTypes.UserCredential | undefined;
}
export declare function createAuthenticationState(values?: Partial<AuthenticationState>): Readonly<AuthenticationState>;
export declare function isAuthenticationState(value: unknown): value is AuthenticationState;
