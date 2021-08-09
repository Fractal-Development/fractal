import React, { ReactNode } from 'react';
import { Background } from '@bma98/fractal-ui';

export interface StackScreenWebContainerProps {
    children?: ReactNode;
}

export function StackScreenWebContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    return (
        <Background top={0} right={0} left={0} bottom={0} flex={1} position={'absolute'}>
            {children}
        </Background>
    );
}
