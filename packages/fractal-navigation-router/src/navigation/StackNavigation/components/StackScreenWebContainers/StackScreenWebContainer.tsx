import React, { ReactNode } from 'react';
import { Background } from '@bma98/fractal-ui';
import { StackNavigationGoBackAnimatedProvider } from '../../context/StackNavigationGoBackAnimatedProvider';
import { useHistory } from '../../../../router';

export interface StackScreenWebContainerProps {
    children?: ReactNode;
}

export function StackScreenWebContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    const { goBack } = useHistory();

    return (
        <StackNavigationGoBackAnimatedProvider goBackAnimated={goBack}>
            <Background>{children}</Background>
        </StackNavigationGoBackAnimatedProvider>
    );
}
