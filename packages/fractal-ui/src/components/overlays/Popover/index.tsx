import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { PopoverContent } from './PopoverContent';
import { PopoverPortalContent } from './PopoverPortalContent';
import { PlacementOffsetStyle, PopoverProps } from './types';
import { getWebPlacementOffsetStyle } from './utils/getWebPlacementOffsetStyle';
import { getWebPortalPlacementOffsetStyle } from './utils/getWebPortalPlacementOffsetStyle';

const Popover = forwardRef(
    (
        {
            active,
            placement = 'bottom',
            usePortal,
            popoverChildren,
            popoverContainerProps,
            onRequestClose,
            children,
            ...others
        }: PopoverProps,
        ref: any
    ): JSX.Element => {
        const [placementOffsetStyle, setPlacementOffsetStyle] = useState<PlacementOffsetStyle>();
        const anchorRef = useRef<HTMLDivElement>();
        const popoverRef = useRef<HTMLDivElement>();
        const anchorWidth = anchorRef.current?.offsetWidth;

        useEffect(() => {
            setPlacementOffsetStyle(
                usePortal
                    ? getWebPortalPlacementOffsetStyle(anchorRef, popoverRef, placement)
                    : getWebPlacementOffsetStyle(anchorRef, popoverRef, placement)
            );
        }, [placement, active, usePortal]);

        if (usePortal) {
            return (
                <PopoverPortalContent
                    ref={ref}
                    active={active}
                    anchorRef={anchorRef}
                    popoverRef={popoverRef}
                    anchorWidth={anchorWidth}
                    placementOffsetStyle={placementOffsetStyle}
                    popoverChildren={popoverChildren}
                    popoverContainerProps={popoverContainerProps}
                    onRequestClose={onRequestClose}
                    {...others}
                >
                    {children}
                </PopoverPortalContent>
            );
        }

        return (
            <PopoverContent
                ref={ref}
                active={active}
                anchorRef={anchorRef}
                popoverRef={popoverRef}
                anchorWidth={anchorWidth}
                placementOffsetStyle={placementOffsetStyle}
                popoverChildren={popoverChildren}
                popoverContainerProps={popoverContainerProps}
                onRequestClose={onRequestClose}
                {...others}
            >
                {children}
            </PopoverContent>
        );
    }
);

Popover.displayName = 'Popover';

export { Popover };
