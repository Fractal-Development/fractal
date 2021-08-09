import React, { ReactNode } from 'react';

export interface StackScreenWebContainerProps {
    children?: ReactNode;
}

export function StackScreenWebContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    return <>{children}</>;
}
