import React, { forwardRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../layout/Layer';
import { OutsideClickListener } from './OutsideClickListener';
import { PopoverPortalContentProps } from './types';
import { styleVariants } from './utils/styleVariants';

const PopoverContent = forwardRef(
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
            <Layer ref={ref} position={'relative'} display={'inline-block'} {...others}>
                {children(anchorRef)}
                <AnimatePresence>
                    {active ? (
                        <OutsideClickListener onOutsideClick={onRequestClose}>
                            <Layer
                                ref={popoverRef}
                                from={styleVariants.initial}
                                animate={styleVariants.visible}
                                exit={styleVariants.initial}
                                position={'absolute'}
                                zIndex={2000}
                                style={placementOffsetStyle}
                                {...popoverContainerProps}
                            >
                                {popoverChildren(anchorWidth)}
                            </Layer>
                        </OutsideClickListener>
                    ) : null}
                </AnimatePresence>
            </Layer>
        );
    }
);

PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };
