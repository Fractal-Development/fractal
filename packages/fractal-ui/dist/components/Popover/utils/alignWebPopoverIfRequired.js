const flipSign = (x) => x * -1;
function getElementViewportOffset(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top - offset,
        bottom: flipSign(rect.bottom - window.innerHeight) - offset,
        left: rect.left - offset,
        right: flipSign(rect.right - window.innerWidth) - offset
    };
}
export function alignWebPopoverIfRequired(style, anchorElement, popoverWidth, popoverHeight, placement) {
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
    console.log({ isOverflowingRight, isOverflowingLeft, isOverflowingBottom, isOverflowingTop });
    if (isOverflowingRight) {
        style.left = undefined;
        style.right = isVertical ? 0 : offsetWidth;
        if (isVertical) {
            style.transform = undefined;
        }
    }
    if (isOverflowingTop) {
        style.top = offsetHeight;
        style.transform = undefined;
    }
    if (isOverflowingBottom) {
        style.top = undefined;
        style.bottom = offsetHeight;
        style.transform = undefined;
    }
    if (isOverflowingLeft) {
        style.left = isVertical ? 0 : offsetWidth;
        if (isVertical) {
            style.transform = undefined;
        }
    }
    return style;
}
//# sourceMappingURL=alignWebPopoverIfRequired.js.map