import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthenticationState, createAuthenticationState } from '../../../types/AuthenticationState';

export async function signOut(): Promise<AuthenticationState> {
    await firebase.auth().signOut();
    return createAuthenticationState({
        loading: false
    });
}
