import React, { ReactNode } from 'react';
import { useHistory } from '../router';
import { MiddleCellModal } from '@bma98/fractal-ui';

interface StackScreenModalProps {
    children: JSX.Element | ReactNode;
}

export function StackScreenWebModalContainer({ children }: StackScreenModalProps): JSX.Element {
    const { goBack } = useHistory();

    return (
        <MiddleCellModal visible onDismiss={goBack}>
            {children}
        </MiddleCellModal>
    );
}
