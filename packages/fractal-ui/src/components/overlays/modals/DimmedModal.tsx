import React, { forwardRef } from 'react';

import { Pressable } from '../../interactive/buttons/Pressable';
import { SafeAreaLayer } from '../../layout';
import { Modal } from './Modal';
import { ModalProps } from './Modal/types';

const modalAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
};

const pressableAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 }
};

const DimmedModal = forwardRef(
    ({ visible, onDismiss, onExitComplete, ...others }: ModalProps, ref: any): JSX.Element => (
        <Modal
            ref={ref}
            visible={visible}
            onDismiss={onDismiss}
            from={modalAnimationStyles.initial}
            animate={modalAnimationStyles.animate}
            exit={modalAnimationStyles.initial}
            onExitComplete={onExitComplete}
        >
            <Pressable
                zIndex={999}
                onPress={onDismiss}
                position='absolute'
                width='100%'
                height='100%'
                backgroundColor='#000000'
                from={pressableAnimationStyles.initial}
                animate={pressableAnimationStyles.animate}
                exit={pressableAnimationStyles.initial}
                transition={{ type: 'spring' }}
            />
            <SafeAreaLayer zIndex={1000} {...others} />
        </Modal>
    )
);

DimmedModal.displayName = 'DimmedModal';

export { DimmedModal };
