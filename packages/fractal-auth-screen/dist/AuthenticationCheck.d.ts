import { ReactElement } from 'react';
export interface CredentialValidatorProps {
    key: string;
    checkIfShouldAllowAccess: () => Promise<boolean>;
    onCredentialLoadFailed?: (error: string) => void;
    children: ReactElement;
    loadingComponent: ReactElement;
    redirectComponent: ReactElement;
}
export declare const AuthenticationCheck: import("react").MemoExoticComponent<({ loadingComponent, children, redirectComponent, checkIfShouldAllowAccess, onCredentialLoadFailed }: CredentialValidatorProps) => ReactElement>;
