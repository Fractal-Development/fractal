import React, { forwardRef } from 'react';

import { DimmedModal } from './DimmedModal';
import { ModalProps } from './Modal/types';
import { ModalCell } from './ModalCell';

const BottomCellModal = forwardRef(
    ({ visible, onDismiss, onExitComplete, ...others }: ModalProps, ref: any): JSX.Element => (
        <DimmedModal
            ref={ref}
            pointerEvents='box-none'
            visible={visible}
            onDismiss={onDismiss}
            height='100%'
            width='100%'
            justifyContent='flex-end'
            alignItems='center'
            onExitComplete={onExitComplete}
        >
            <ModalCell {...others} variant='bottom' />
        </DimmedModal>
    )
);

BottomCellModal.displayName = 'BottomCellModal';

export { BottomCellModal };
