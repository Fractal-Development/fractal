import { useTheme } from '@bma98/fractal-ui';
import { useMemo } from 'react';
import { TabBarPosition } from '../types';
import { useSafeAreaInsets } from './useSafeAreaInsets';

export type TabBarPaddingStyles = { paddingBottom?: number; paddingLeft?: number; paddingRight?: number };

export function useTabBarSafeAreaPadding(tabBarPosition: TabBarPosition): TabBarPaddingStyles {
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
        }
    }, [safeAreaInsets, tabBarPosition, spacings]);
}
