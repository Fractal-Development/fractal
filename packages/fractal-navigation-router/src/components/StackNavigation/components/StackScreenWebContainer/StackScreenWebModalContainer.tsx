import React, { ReactNode, useCallback, useState } from 'react';
import { Background, MiddleCellModal } from '@bma98/fractal-ui';
import { useHistory } from '../../../../router';
import { StackNavigationGoBackAnimatedProvider } from '../../context/StackNavigationGoBackAnimatedProvider';

interface StackScreenModalProps {
    children?: ReactNode;
}

export function StackScreenWebModalContainer({ children }: StackScreenModalProps): JSX.Element {
    const { goBack } = useHistory();
    const [visible, setVisible] = useState(true);

    const goBackAnimated = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    return (
        <StackNavigationGoBackAnimatedProvider goBackAnimated={goBackAnimated}>
            <MiddleCellModal position='relative' visible={visible} onDismiss={goBackAnimated} onExitComplete={goBack}>
                <Background>{children}</Background>
            </MiddleCellModal>
        </StackNavigationGoBackAnimatedProvider>
    );
}
