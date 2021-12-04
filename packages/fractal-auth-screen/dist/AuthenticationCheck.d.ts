import { ReactElement } from 'react';
declare type AuthenticationState = 'loading' | 'accessIsAllowed' | 'accessIsNotAllowed';
export interface CredentialValidatorProps {
    key: string;
    checkIfShouldAllowAccess?: () => Promise<boolean>;
    onCredentialLoadFailed?: (error: string) => void;
    children: ReactElement;
    loadingComponent: ReactElement;
    redirectComponent: ReactElement;
    state?: AuthenticationState;
}
export declare function AuthenticationCheck({ loadingComponent, children, redirectComponent, checkIfShouldAllowAccess, onCredentialLoadFailed, state }: CredentialValidatorProps): ReactElement;
export declare namespace AuthenticationCheck {
    var displayName: string;
}
export {};
