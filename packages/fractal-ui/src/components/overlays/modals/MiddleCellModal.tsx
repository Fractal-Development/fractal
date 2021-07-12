import React, { forwardRef } from 'react';
import { ModalProps } from './Modal/types';
import { DimmedModal } from './DimmedModal';
import { ModalCell } from './ModalCell';

const MiddleCellModal = forwardRef(({ visible, onDismiss, ...others }: ModalProps, ref: any): JSX.Element => {
    return (
        <DimmedModal
            ref={ref}
            pointerEvents={'box-none'}
            visible={visible}
            onDismiss={onDismiss}
            height={'100%'}
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <ModalCell {...others} variant={'middle'} />
        </DimmedModal>
    );
});

MiddleCellModal.displayName = 'MiddleCellModal';

export { MiddleCellModal };
