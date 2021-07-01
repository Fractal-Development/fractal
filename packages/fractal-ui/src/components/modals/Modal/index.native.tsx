import React, { forwardRef } from 'react';
import { ModalProps } from './types';
import { Modal as RNModal } from 'react-native';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../containers';

const Modal = forwardRef(({ visible, ...others }: ModalProps, ref: any): JSX.Element => {
    return (
        <AnimatePresence>
            {visible ? (
                <RNModal ref={ref} animationType={'none'} transparent>
                    <Layer position={'absolute'} top={0} right={0} bottom={0} left={0} {...others} />
                </RNModal>
            ) : null}
        </AnimatePresence>
    );
});

Modal.displayName = 'Modal';

export { Modal };
