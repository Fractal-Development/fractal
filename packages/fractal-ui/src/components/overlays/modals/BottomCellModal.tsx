import React, { forwardRef } from 'react';
import { ModalProps } from './Modal/types';
import { DimmedModal } from './DimmedModal';
import { ModalCell } from './ModalCell';

const BottomCellModal = forwardRef(({ visible, onDismiss, ...others }: ModalProps, ref: any): JSX.Element => {
    return (
        <DimmedModal
            ref={ref}
            pointerEvents={'box-none'}
            visible={visible}
            onDismiss={onDismiss}
            height={'100%'}
            width={'100%'}
            justifyContent={'flex-end'}
            alignItems={'center'}
        >
            <ModalCell {...others} variant={'bottom'} />
        </DimmedModal>
    );
});

BottomCellModal.displayName = 'BottomCellModal';

export { BottomCellModal };
