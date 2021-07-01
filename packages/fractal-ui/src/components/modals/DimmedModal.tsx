import React, { forwardRef } from 'react';
import { Modal } from './Modal';
import { ModalProps } from './Modal/types';
import { Pressable } from '../buttons';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';
import { FractalTransition } from '../../sharedProps';
import { canUseDOM } from '../../executionEnvironment/canUseDOM';

const modalAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
};

const pressableAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 }
};

const transition: FractalTransition = canUseDOM ? { type: 'spring' } : { type: 'ease', duration: 400 };

const DimmedModal = forwardRef(({ visible, onDismiss, ...others }: ModalProps, ref: any): JSX.Element => {
    return (
        <Modal
            ref={ref}
            visible={visible}
            onDismiss={onDismiss}
            initial={modalAnimationStyles.initial}
            animate={modalAnimationStyles.animate}
            exit={modalAnimationStyles.initial}
        >
            <Pressable
                zIndex={999}
                onPress={onDismiss}
                position='absolute'
                width='100%'
                height='100%'
                backgroundColor='black'
                initial={pressableAnimationStyles.initial}
                animate={pressableAnimationStyles.animate}
                exit={pressableAnimationStyles.initial}
                transition={transition}
            />
            <SafeAreaLayer zIndex={1000} {...others} />
        </Modal>
    );
});

DimmedModal.displayName = 'DimmedModal';

export { DimmedModal };
