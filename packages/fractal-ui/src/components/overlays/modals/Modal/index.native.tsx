import { AnimatePresence } from 'moti';
import React, { forwardRef } from 'react';
import { Modal as RNModal } from 'react-native';

import { Layer } from '../../../layout/Layer';
import { ModalProps } from './types';

const Modal = forwardRef(
    ({ visible, onExitComplete, ...others }: ModalProps, ref: any): JSX.Element => (
        <AnimatePresence onExitComplete={onExitComplete}>
            {visible ? (
                <RNModal ref={ref} visible animationType='none' transparent>
                    <Layer position='absolute' top={0} right={0} bottom={0} left={0} {...others} />
                </RNModal>
            ) : null}
        </AnimatePresence>
    )
);

Modal.displayName = 'Modal';

export { Modal };
