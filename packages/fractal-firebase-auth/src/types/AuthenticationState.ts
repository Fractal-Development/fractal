import produce from 'immer';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthenticationState {
    firebaseUser: FirebaseAuthTypes.User | undefined | null;
    loading: boolean;
    credential: FirebaseAuthTypes.UserCredential | undefined;
}

export function createAuthenticationState(values?: Partial<AuthenticationState>): Readonly<AuthenticationState> {
    return produce(
        {
            firebaseUser: undefined,
            loading: true,
            credential: undefined
        },
        (draft) => {
            Object.assign(draft, values);
        }
    );
}

export function isAuthenticationState(value: unknown): value is AuthenticationState {
    const castedValue = value as AuthenticationState;
    return castedValue.loading != null;
}
