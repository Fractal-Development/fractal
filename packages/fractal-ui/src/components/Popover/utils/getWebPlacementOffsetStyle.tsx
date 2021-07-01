import { MutableRefObject } from 'react';
import { PlacementOffsetStyle, PlacementType } from '../types';
import { alignWebPopoverIfRequired } from './alignWebPopoverIfRequired';

export function getWebPlacementOffsetStyle(
    anchorRef: MutableRefObject<HTMLDivElement | undefined>,
    popoverRef: MutableRefObject<HTMLDivElement | undefined>,
    placement: PlacementType
): PlacementOffsetStyle | undefined {
    let style: PlacementOffsetStyle = {};

    if (anchorRef.current && popoverRef.current) {
        const offsetHeight = anchorRef.current.offsetHeight;
        const offsetWidth = anchorRef.current.offsetWidth;
        const offsetLeft = anchorRef.current.offsetLeft;
        const offsetTop = anchorRef.current.offsetTop;
        const popoverWidth = popoverRef.current.offsetWidth;
        const popoverHeight = popoverRef.current.offsetHeight;

        if (placement == 'bottom') {
            style = {
                left: offsetLeft + offsetWidth / 2,
                top: offsetHeight,
                transform: 'translateX(-50%)'
            };
        }
        if (placement === 'top') {
            style = {
                left: offsetLeft + offsetWidth / 2,
                top: offsetTop - popoverHeight,
                transform: 'translateX(-50%)'
            };
        }
        if (placement === 'left') {
            style = {
                left: offsetLeft - popoverWidth,
                top: offsetTop + offsetHeight / 2,
                transform: 'translateY(-50%)'
            };
        }
        if (placement == 'right') {
            style = {
                left: offsetLeft + offsetWidth,
                top: offsetTop + offsetHeight / 2,
                transform: 'translateY(-50%)'
            };
        }
        style = alignWebPopoverIfRequired(style, anchorRef.current, popoverWidth, popoverHeight, placement);
        return style;
    }
    return undefined;
}
