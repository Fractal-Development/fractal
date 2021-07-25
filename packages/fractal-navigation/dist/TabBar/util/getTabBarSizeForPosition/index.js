export function getTabBarSizeForPosition(position, hidden) {
    if (hidden) {
        return 0;
    }
    else if (position === 'left' || position === 'right' || position === 'bottom') {
        return 61;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=index.js.map