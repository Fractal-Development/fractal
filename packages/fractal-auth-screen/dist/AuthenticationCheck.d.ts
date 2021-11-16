import { ReactElement } from 'react';
/**
 * TODO:
 * Add a way to change the authenticationState with props for listener based authentication.
 */
export interface CredentialValidatorProps {
    key: string;
    checkIfShouldAllowAccess: () => Promise<boolean>;
    onCredentialLoadFailed?: (error: string) => void;
    children: ReactElement;
    loadingComponent: ReactElement;
    redirectComponent: ReactElement;
}
export declare function AuthenticationCheck({ loadingComponent, children, redirectComponent, checkIfShouldAllowAccess, onCredentialLoadFailed }: CredentialValidatorProps): ReactElement;
export declare namespace AuthenticationCheck {
    var displayName: string;
}
