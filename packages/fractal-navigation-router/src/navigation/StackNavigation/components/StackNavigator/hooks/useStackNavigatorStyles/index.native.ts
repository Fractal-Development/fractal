import { useMemo } from 'react';
import { useTabBarInsets } from '@bma98/fractal-navigation';
import { getMarginInsets } from '../../util/getMarginInsets';

export function useStackNavigatorStyles(style: any) {
    const tabBarInsets = useTabBarInsets();

    return useMemo(() => {
        return [style, getMarginInsets(tabBarInsets, false, true)];
    }, [style, tabBarInsets]);
}
