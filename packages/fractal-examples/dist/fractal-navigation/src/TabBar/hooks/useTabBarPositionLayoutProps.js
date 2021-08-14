import { getValueForTabBarPosition } from '../util';
import { useMemo } from 'react';
import { useTabBarSafeAreaSizeForPosition } from './useTabBarSafeAreaSizeForPosition';
import { useTabBarIsHidden } from './useTabBarIsHidden';
const bottomSide = { bottom: 0 };
const leftSide = { left: 0 };
const rightSide = { right: 0 };
export function useTabBarPositionLayoutProps(tabBarPosition) {
    const safeAreaSize = useTabBarSafeAreaSizeForPosition(tabBarPosition);
    const tabBarIsHidden = useTabBarIsHidden();
    const width = getValueForTabBarPosition(tabBarPosition, '100%', safeAreaSize, safeAreaSize);
    const height = getValueForTabBarPosition(tabBarPosition, safeAreaSize, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const absolutePositionValue = getValueForTabBarPosition(tabBarPosition, bottomSide, leftSide, rightSide);
    const translateSize = safeAreaSize + 20;
    const translateY = tabBarIsHidden ? getValueForTabBarPosition(tabBarPosition, translateSize, 0, 0) : 0;
    const translateX = tabBarIsHidden ? getValueForTabBarPosition(tabBarPosition, 0, -1 * translateSize, translateSize) : 0;
    return useMemo(() => {
        return Object.assign({ width, height, flexDirection, translateY, translateX }, absolutePositionValue);
    }, [width, height, flexDirection, absolutePositionValue, translateY, translateX]);
}
//# sourceMappingURL=useTabBarPositionLayoutProps.js.map