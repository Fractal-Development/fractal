import { getTabBarSizeForPosition } from '../util';
import { useSafeAreaInsets } from './useSafeAreaInsets';
import { TabBarPosition } from '../types';

export function useTabBarSafeAreaSizeForPosition(tabBarPosition: TabBarPosition): number {
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
