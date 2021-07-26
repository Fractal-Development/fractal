import { getValueForTabBarPosition } from '../util';
import { useMemo } from 'react';
import { useTabBarSafeAreaSizeForPosition } from './useTabBarSafeAreaSizeForPosition';
const bottomSide = { bottom: 0 };
const leftSide = { left: 0 };
const rightSide = { right: 0 };
export function useTabBarPositionValues(tabBarPosition) {
    const safeAreaSize = useTabBarSafeAreaSizeForPosition(tabBarPosition);
    const width = getValueForTabBarPosition(tabBarPosition, '100%', safeAreaSize, safeAreaSize);
    const height = getValueForTabBarPosition(tabBarPosition, safeAreaSize, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const absolutePositionValue = getValueForTabBarPosition(tabBarPosition, bottomSide, leftSide, rightSide);
    return useMemo(() => {
        return Object.assign({ width, height, flexDirection }, absolutePositionValue);
    }, [width, height, flexDirection, absolutePositionValue]);
}
//# sourceMappingURL=useTabBarPositionValues.js.map