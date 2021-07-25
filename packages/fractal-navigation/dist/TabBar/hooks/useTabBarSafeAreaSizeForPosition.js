import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';
import { useSafeAreaInsets } from './useSafeAreaInsets';
export function useTabBarSafeAreaSizeForPosition(tabBarPosition) {
    const safeAreaInsets = useSafeAreaInsets();
    const size = getTabBarSizeForPosition(tabBarPosition);
    switch (tabBarPosition) {
        case 'right':
            return safeAreaInsets.right + size;
        case 'left':
            return safeAreaInsets.left + size;
        case 'bottom':
            return safeAreaInsets.bottom + size;
    }
}
//# sourceMappingURL=useTabBarSafeAreaSizeForPosition.js.map