import { AnimatePresence } from 'framer-motion';
import React, { forwardRef } from 'react';
import { ModalPortal } from './ModalPortal';
import { ModalContent } from './ModalContent';
import { ModalProps } from './types';

const Modal = forwardRef(({ visible, ...others }: ModalProps, ref: any): JSX.Element => {
    delete others['onDismiss'];

    return (
        <ModalPortal>
            <AnimatePresence>{visible ? <ModalContent ref={ref} key='ModalContent' {...others} /> : null}</AnimatePresence>
        </ModalPortal>
    );
});

Modal.displayName = 'Modal';

export { Modal };
