import React, { ReactNode, useCallback, useState } from 'react';
import { Background, MiddleCellModal } from '@bma98/fractal-ui';
import { useNavigate } from '../../../../router';
import { StackNavigationGoBackAnimatedProvider } from '../../context/StackNavigationGoBackAnimatedProvider';

interface StackScreenModalProps {
    children?: ReactNode;
}

export function StackScreenWebModalContainer({ children }: StackScreenModalProps): JSX.Element {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);

    const goBackAnimated = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <StackNavigationGoBackAnimatedProvider goBackAnimated={goBackAnimated}>
            <MiddleCellModal position='relative' visible={visible} onDismiss={goBackAnimated} onExitComplete={goBack}>
                <Background>{children}</Background>
            </MiddleCellModal>
        </StackNavigationGoBackAnimatedProvider>
    );
}
