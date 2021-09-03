import { ReactElement } from 'react';
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
