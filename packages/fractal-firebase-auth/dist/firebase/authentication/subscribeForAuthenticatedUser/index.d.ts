import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthenticationState } from '../../../types/AuthenticationState';
export declare function subscribeForAuthenticatedUser(onFetch: (state: AuthenticationState) => void): firebase.Unsubscribe;
