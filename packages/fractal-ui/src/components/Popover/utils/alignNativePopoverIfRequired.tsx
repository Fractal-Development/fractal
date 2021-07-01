import { Dimensions } from 'react-native';
import { NativePlacementOffsetStyle, LayoutRectangle, PlacementType } from '../types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export function alignNativePopoverIfRequired(
    style: NativePlacementOffsetStyle,
    anchorLayoutRectangle: LayoutRectangle,
    popoverLayoutRectangle: LayoutRectangle,
    placement: PlacementType
): NativePlacementOffsetStyle {
    const isVertical = placement === 'top' || placement === 'bottom';
    const offsetPopoverWidth = isVertical ? popoverLayoutRectangle.width / 2 : popoverLayoutRectangle.width;
    const offsetPopoverHeight = popoverLayoutRectangle.height;
    const anchorWidth = anchorLayoutRectangle.width;
    const popoverWidth = popoverLayoutRectangle.width;

    const isOverflowingRight: boolean = (style.left ? style.left : 0) + offsetPopoverWidth > screenWidth;
    const isOverflowingLeft: boolean = isVertical
        ? (style.left ? style.left : 0) - offsetPopoverWidth < 0
        : (style.left ? style.left : 0) < 0;
    const isOverflowingTop: boolean = (style.top ? style.top : 0) - offsetPopoverHeight < 0;
    const isOverflowingBottom: boolean = (style.top ? style.top : 0) + offsetPopoverHeight > screenHeight;

    if (isOverflowingRight) {
        style = {
            left: isVertical ? anchorLayoutRectangle.x + anchorWidth - popoverWidth : anchorLayoutRectangle.x - popoverWidth,
            top: style.top,
            transform: isVertical ? [] : style.transform
        };
    }

    if (isOverflowingTop) {
        style = {
            left: style.left,
            top: anchorLayoutRectangle.y + anchorLayoutRectangle.height,
            transform: isVertical ? style.transform : []
        };
    }

    if (isOverflowingBottom) {
        style = {
            left: style.left,
            top: anchorLayoutRectangle.y - popoverLayoutRectangle.height,
            transform: isVertical ? style.transform : []
        };
    }

    if (isOverflowingLeft) {
        style = {
            left: isVertical ? anchorLayoutRectangle.x : anchorLayoutRectangle.x + anchorWidth,
            top: style.top,
            transform: isVertical ? [] : style.transform
        };
    }
    return style;
}
