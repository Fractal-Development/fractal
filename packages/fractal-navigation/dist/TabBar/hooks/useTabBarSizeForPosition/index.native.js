import { Platform } from 'react-native';
import { useTheme } from '@bma98/fractal-ui';
export function useTabBarSizeForPosition(position, hidden) {
    const { tabBar } = useTheme();
    if (hidden) {
        return 0;
    }
    else if (Platform.OS === 'ios' && position === 'bottom') {
        return tabBar.iOSVerticalHeight;
    }
    else if (Platform.OS === 'ios' && (position === 'left' || position === 'right')) {
        return tabBar.iOSHorizontalWidth;
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
//# sourceMappingURL=index.native.js.map