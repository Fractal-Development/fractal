import { useMemo } from 'react';
import { useSafeAreaInsets } from './useSafeAreaInsets';
export function useTabBarSafeAreaPadding(tabBarPosition) {
    const safeAreaInsets = useSafeAreaInsets();
    return useMemo(() => {
        switch (tabBarPosition) {
            case 'bottom':
                return { paddingBottom: safeAreaInsets.bottom };
            case 'left':
                return { paddingLeft: safeAreaInsets.left };
            case 'right':
                return { paddingRight: safeAreaInsets.right };
        }
    }, [safeAreaInsets, tabBarPosition]);
}
//# sourceMappingURL=useTabBarSafeAreaPadding.js.map