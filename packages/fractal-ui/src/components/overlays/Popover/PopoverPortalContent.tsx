import React, { forwardRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../layout/Layer';
import { ModalPortal } from '../modals/Modal/ModalPortal';
import { OutsideClickListener } from './OutsideClickListener';
import { PopoverPortalContentProps } from './types';
import { styleVariants } from './utils/styleVariants';

const PopoverPortalContent = forwardRef(
    (
        {
            active,
            anchorRef,
            popoverRef,
            anchorWidth,
            placementOffsetStyle,
            popoverChildren,
            popoverContainerProps,
            onRequestClose,
            children,
            ...others
        }: PopoverPortalContentProps,
        ref: any
    ): JSX.Element => {
        return (
            <Layer ref={ref} {...others}>
                {children(anchorRef)}
                <ModalPortal>
                    <AnimatePresence>
                        {active ? (
                            <Layer
                                ref={popoverRef}
                                from={styleVariants.initial}
                                animate={styleVariants.visible}
                                exit={styleVariants.initial}
                                position={'absolute'}
                                zIndex={2}
                                style={placementOffsetStyle}
                                {...popoverContainerProps}
                            >
                                <OutsideClickListener onOutsideClick={onRequestClose}>{popoverChildren(anchorWidth)}</OutsideClickListener>
                            </Layer>
                        ) : null}
                    </AnimatePresence>
                </ModalPortal>
            </Layer>
        );
    }
);

PopoverPortalContent.displayName = 'PopoverPortalContent';

export { PopoverPortalContent };
