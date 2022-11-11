import { AuthenticationState } from '../../../types/AuthenticationState';
export declare function subscribeForAuthenticatedUser(onFetch: (state: AuthenticationState) => void): () => void;
