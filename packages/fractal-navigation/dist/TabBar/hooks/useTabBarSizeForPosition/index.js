import { useTheme } from '@bma98/fractal-ui';
export function useTabBarSizeForPosition(position, hidden) {
    const { tabBar } = useTheme();
    if (hidden) {
        return 0;
    }
    else if (position === 'bottom') {
        return tabBar.verticalHeight;
    }
    else if (position === 'left' || position === 'right') {
        return tabBar.horizontalWidth;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=index.js.map