import { LayoutRectangle, NativePlacementOffsetStyle, PlacementType } from '../types';
import { alignNativePopoverIfRequired } from './alignNativePopoverIfRequired';

export function getNativePlacementOffsetStyle(
    anchorLayoutRectangle: LayoutRectangle,
    popoverLayoutRectangle: LayoutRectangle,
    placement: PlacementType
): NativePlacementOffsetStyle {
    let style: NativePlacementOffsetStyle = {};
    const anchorWidth = anchorLayoutRectangle.width;
    const xValueVertical = anchorLayoutRectangle.x + anchorWidth / 2;
    const yValueHorizontal = anchorLayoutRectangle.y + anchorLayoutRectangle.height / 2;
    const popoverWidth = popoverLayoutRectangle.width;

    if (placement == 'bottom') {
        style = {
            left: xValueVertical,
            top: anchorLayoutRectangle.y + anchorLayoutRectangle.height,
            transform: [{ translateX: -(popoverWidth / 2) }]
        };
    }

    if (placement == 'top') {
        style = {
            left: xValueVertical,
            top: anchorLayoutRectangle.y - popoverLayoutRectangle.height,
            transform: [{ translateX: -(popoverWidth / 2) }]
        };
    }
    if (placement == 'left') {
        style = {
            left: anchorLayoutRectangle.x - popoverWidth,
            top: yValueHorizontal,
            transform: [{ translateY: -(popoverLayoutRectangle.height / 2) }]
        };
    }
    if (placement == 'right') {
        style = {
            left: anchorLayoutRectangle.x + anchorWidth,
            top: yValueHorizontal,
            transform: [{ translateY: -(popoverLayoutRectangle.height / 2) }]
        };
    }
    style = alignNativePopoverIfRequired(style, anchorLayoutRectangle, popoverLayoutRectangle, placement);
    return style;
}
