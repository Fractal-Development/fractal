import { useMemo } from 'react';
import { useTabBarInsets } from '@bma98/fractal-navigation';
import { getMarginInsets } from '../../util/getMarginInsets';
export function useStackNavigatorStyles(style) {
    const tabBarInsets = useTabBarInsets();
    return useMemo(() => {
        return Object.assign(Object.assign({}, getMarginInsets(tabBarInsets, false, true)), style);
    }, [style, tabBarInsets]);
}
//# sourceMappingURL=index.js.map