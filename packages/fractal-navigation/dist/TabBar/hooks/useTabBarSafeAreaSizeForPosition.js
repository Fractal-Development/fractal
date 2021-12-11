import { useSafeAreaInsets } from './useSafeAreaInsets';
import { useTabBarSizeForPosition } from './useTabBarSizeForPosition';
export function useTabBarSafeAreaSizeForPosition(tabBarPosition) {
    const safeAreaInsets = useSafeAreaInsets();
    const size = useTabBarSizeForPosition(tabBarPosition);
    switch (tabBarPosition) {
        case 'right':
            return safeAreaInsets.right + size;
        case 'left':
            return safeAreaInsets.left + size;
        case 'bottom':
            return safeAreaInsets.bottom + size;
        default:
            return safeAreaInsets.bottom + size;
    }
}
//# sourceMappingURL=useTabBarSafeAreaSizeForPosition.js.map