import React, { ReactNode } from 'react';
import { Background } from '@bma98/fractal-ui';

export interface StackScreenWebContainerProps {
    children?: ReactNode;
}

export function StackScreenWebPushContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    return <Background>{children}</Background>;
}
