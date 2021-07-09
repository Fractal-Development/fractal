import React, { forwardRef } from 'react';
import { Modal } from './Modal';
import { ModalProps } from './Modal/types';
import { Pressable } from '../buttons';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';

const modalAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
};

const pressableAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 }
};

const DimmedModal = forwardRef(({ visible, onDismiss, ...others }: ModalProps, ref: any): JSX.Element => {
    return (
        <Modal
            ref={ref}
            visible={visible}
            onDismiss={onDismiss}
            from={modalAnimationStyles.initial}
            animate={modalAnimationStyles.animate}
            exit={modalAnimationStyles.initial}
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
    );
});

DimmedModal.displayName = 'DimmedModal';

export { DimmedModal };
