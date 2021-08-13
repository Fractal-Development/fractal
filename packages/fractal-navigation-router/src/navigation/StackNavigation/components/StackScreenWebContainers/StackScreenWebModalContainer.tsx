import React, { ReactNode } from 'react';
import { useHistory } from '../../../../router';
import { Background, MiddleCellModal } from '@bma98/fractal-ui';

interface StackScreenModalProps {
    children?: ReactNode;
}

export function StackScreenWebModalContainer({ children }: StackScreenModalProps): JSX.Element {
    const { goBack } = useHistory();

    return (
        <MiddleCellModal position={'relative'} visible onDismiss={goBack}>
            <Background>{children}</Background>
        </MiddleCellModal>
    );
}
