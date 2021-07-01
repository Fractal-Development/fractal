import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../containers/Layer';
import { styleVariants } from './utils/styleVariants';
import { PlacementOffsetStyle, PopoverProps } from './types';
import { getWebPlacementOffsetStyle } from './utils/getWebPlacementOffsetStyle';
import { OutsideClickListener } from './OutsideClickListener';

const Popover = forwardRef(
    (
        { active, placement = 'bottom', popoverChildren, popoverContainerProps, onRequestClose, children, ...others }: PopoverProps,
        ref: any
    ): JSX.Element => {
        const [placementOffsetStyle, setPlacementOffsetStyle] = useState<PlacementOffsetStyle>();
        const anchorRef = useRef<HTMLDivElement>();
        const popoverRef = useRef<HTMLDivElement>();
        const anchorWidth = anchorRef.current?.offsetWidth;

        useEffect(() => {
            setPlacementOffsetStyle(getWebPlacementOffsetStyle(anchorRef, popoverRef, placement));
        }, [placement, active]);

        return (
            <Layer ref={ref} position={'relative'} display={'inline-block'} {...others}>
                {children(anchorRef)}
                <AnimatePresence>
                    {active ? (
                        <OutsideClickListener onOutsideClick={onRequestClose}>
                            <Layer
                                ref={popoverRef}
                                initial={styleVariants.initial}
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

Popover.displayName = 'Popover';

export { Popover };
