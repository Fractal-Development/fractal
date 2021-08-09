export function getMarginInsets(insets, removeHorizontal, removeVertical) {
    const marginTop = removeVertical ? 0 : insets.top;
    const marginRight = removeHorizontal ? 0 : insets.right;
    const marginBottom = removeVertical ? 0 : insets.bottom;
    const marginLeft = removeHorizontal ? 0 : insets.left;
    return {
        marginTop,
        marginRight,
        marginBottom,
        marginLeft
    };
}
//# sourceMappingURL=getMarginInsets.js.map