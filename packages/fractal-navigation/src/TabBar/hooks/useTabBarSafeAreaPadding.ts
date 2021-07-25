import { useMemo } from 'react';
import { TabBarPosition } from '../types';
import { useSafeAreaInsets } from './useSafeAreaInsets';

export type TabBarPaddingStyles = { paddingBottom: number } | { paddingLeft: number } | { paddingRight: number };

export function useTabBarSafeAreaPadding(tabBarPosition: TabBarPosition): TabBarPaddingStyles {
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
