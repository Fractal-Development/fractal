import { useTheme } from '@bma98/fractal-ui';
import { useMemo } from 'react';
import { useSafeAreaInsets } from './useSafeAreaInsets';
export function useTabBarSafeAreaPadding(tabBarPosition) {
    const safeAreaInsets = useSafeAreaInsets();
    const { spacings } = useTheme();
    return useMemo(() => {
        switch (tabBarPosition) {
            case 'bottom':
                return { paddingBottom: safeAreaInsets.bottom };
            case 'left':
                return { paddingLeft: safeAreaInsets.left, paddingTop: spacings.m };
            case 'right':
                return { paddingRight: safeAreaInsets.right, paddingTop: spacings.m };
            default:
                return { paddingBottom: safeAreaInsets.bottom };
        }
    }, [safeAreaInsets, tabBarPosition, spacings]);
}
//# sourceMappingURL=useTabBarSafeAreaPadding.js.map