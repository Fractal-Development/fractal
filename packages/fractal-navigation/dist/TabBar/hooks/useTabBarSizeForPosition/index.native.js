import { Platform } from 'react-native';
import { useTheme } from '@bma98/fractal-ui';
export function useTabBarSizeForPosition(position, hidden) {
    const { tabBar } = useTheme();
    if (hidden) {
        return 0;
    }
    if (Platform.OS === 'ios' && position === 'bottom') {
        return tabBar.iOSVerticalHeight;
    }
    if (Platform.OS === 'ios' && (position === 'left' || position === 'right')) {
        return tabBar.iOSHorizontalWidth;
    }
    if (position === 'bottom') {
        return tabBar.verticalHeight;
    }
    if (position === 'left' || position === 'right') {
        return tabBar.horizontalWidth;
    }
    return 0;
}
//# sourceMappingURL=index.native.js.map