import React, { ReactNode } from 'react';
import { Layer } from '@bma98/fractal-ui';

export interface StackScreenWebContainerProps {
    children?: ReactNode;
}

export function StackScreenWebContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    return <Layer>{children}</Layer>;
}
