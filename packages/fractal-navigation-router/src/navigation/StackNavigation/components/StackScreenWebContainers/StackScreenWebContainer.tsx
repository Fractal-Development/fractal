import React, { ReactNode } from 'react';

export interface StackScreenWebContainerProps {
    children: ReactNode | JSX.Element;
}

export function StackScreenWebContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    return <>{children}</>;
}
