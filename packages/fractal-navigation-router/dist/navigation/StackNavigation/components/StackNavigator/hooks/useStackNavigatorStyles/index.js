import { useMemo } from 'react';
import { useTabBarInsets } from '@bma98/fractal-navigation';
import { getMarginInsets } from '../../util/getMarginInsets';
export function useStackNavigatorStyles(style) {
    const tabBarInsets = useTabBarInsets();
    const marginInsets = getMarginInsets(tabBarInsets, false, true);
    return useMemo(() => {
        return Object.assign(Object.assign({ flex: 1 }, marginInsets), style);
    }, [style, marginInsets]);
}
//# sourceMappingURL=index.js.map