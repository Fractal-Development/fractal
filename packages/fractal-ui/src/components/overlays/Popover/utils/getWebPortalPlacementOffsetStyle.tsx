import { MutableRefObject } from 'react';

import { PlacementOffsetStyle, PlacementType } from '../types';
import { alignWebPortalPopoverIfRequired } from './alignWebPortalPopoverIfRequired';

export function getWebPortalPlacementOffsetStyle(
    anchorRef: MutableRefObject<HTMLDivElement | undefined>,
    popoverRef: MutableRefObject<HTMLDivElement | undefined>,
    placement: PlacementType
): PlacementOffsetStyle | undefined {
    let style: PlacementOffsetStyle = { left: 0, top: 0 };

    if (anchorRef.current && popoverRef.current) {
        const { left, top, bottom } = anchorRef.current.getBoundingClientRect();
        const { offsetHeight } = anchorRef.current;
        const { offsetWidth } = anchorRef.current;
        const popoverWidth = popoverRef.current.offsetWidth;
        const popoverHeight = popoverRef.current.offsetHeight;

        if (placement === 'bottom') {
            style = {
                left: left + offsetWidth / 2,
                top: bottom + window.scrollY,
                transform: 'translateX(-50%)'
            };
        }
        if (placement === 'top') {
            style = {
                left: left + offsetWidth / 2,
                top: top - popoverHeight + window.scrollY,
                transform: 'translateX(-50%)'
            };
        }
        if (placement === 'left') {
            style = {
                left: left - popoverWidth,
                top: top + offsetHeight / 2 + window.scrollY,
                transform: 'translateY(-50%)'
            };
        }
        if (placement === 'right') {
            style = {
                left: left + offsetWidth,
                top: top + offsetHeight / 2 + window.scrollY,
                transform: 'translateY(-50%)'
            };
        }
        style = alignWebPortalPopoverIfRequired(style as any, anchorRef.current, popoverWidth, popoverHeight, placement);
        return style;
    }
    return undefined;
}
