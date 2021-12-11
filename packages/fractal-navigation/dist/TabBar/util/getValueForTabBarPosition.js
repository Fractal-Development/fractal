export function getValueForTabBarPosition(position, bottom, left, right) {
    switch (position) {
        case 'bottom':
            return bottom;
        case 'left':
            return left;
        case 'right':
            return right;
        default:
            return bottom;
    }
}
//# sourceMappingURL=getValueForTabBarPosition.js.map