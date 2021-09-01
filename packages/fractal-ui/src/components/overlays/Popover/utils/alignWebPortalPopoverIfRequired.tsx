import { PlacementType } from '../types';
import { getElementViewportOffset } from './getElementViewportOffset';

export function alignWebPortalPopoverIfRequired(
    style: {
        left: number;
        top: number;
        transform?: string;
    },
    anchorElement: HTMLDivElement,
    popoverWidth: number,
    popoverHeight: number,
    placement: PlacementType
): {
    left: number;
    top: number;
    transform?: string;
} {
    const offsetHeight = anchorElement.offsetHeight;
    const offsetWidth = anchorElement.offsetWidth;
    const offset = getElementViewportOffset(anchorElement, 0);

    const isVertical = placement === 'top' || placement === 'bottom';

    const offsetPopoverWidth = isVertical ? popoverWidth / 2 : popoverWidth;
    const offsetPopoverHeight = isVertical ? popoverHeight : popoverHeight / 2;

    const isOverflowingRight = offset.left + (isVertical ? offsetWidth / 2 : offsetWidth) + offsetPopoverWidth > window.innerWidth;
    const isOverflowingLeft = offset.right + (isVertical ? offsetWidth / 2 : offsetWidth) + offsetPopoverWidth > window.innerWidth;
    const isOverflowingBottom = offset.top + (isVertical ? offsetHeight : offsetHeight / 2) + offsetPopoverHeight > window.innerHeight;
    const isOverflowingTop = offset.bottom + (isVertical ? offsetHeight : offsetHeight / 2) + offsetPopoverHeight > window.innerHeight;

    if (isOverflowingRight && placement != 'left') {
        if (isVertical) {
            style.left = style.left - popoverWidth;
            style.transform = undefined;
        } else {
            style.left = style.left - popoverWidth - offsetWidth;
        }
    }
    if (isOverflowingTop && placement != 'bottom') {
        style.top = style.top + offsetHeight + popoverHeight;
        style.transform = isVertical ? style.transform : undefined;
    }
    if (isOverflowingBottom) {
        style.top = style.top - popoverHeight;
        style.transform = isVertical ? style.transform : undefined;
    }
    if (isOverflowingLeft) {
        if (isVertical) {
            style.transform = undefined;
        }
    }
    return style;
}
