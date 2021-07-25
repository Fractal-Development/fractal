import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
import { useTabBarSafeAreaSizeForPosition } from './useTabBarSafeAreaSizeForPosition';
import { TabBarPosition } from '../types';

interface PositionValue {
    width: string | number;
    height: string | number;
    flexDirection: 'row' | 'column';
    bottom?: number;
    left?: number;
    right?: number;
}

const bottomSide = { bottom: 0 };
const leftSide = { left: 0 };
const rightSide = { right: 0 };

export function useTabBarPositionValues(tabBarPosition: TabBarPosition): PositionValue {
    const safeAreaSize = useTabBarSafeAreaSizeForPosition(tabBarPosition);
    const width = getValueForTabBarPosition<string | number>(tabBarPosition, '100%', safeAreaSize, safeAreaSize);
    const height = getValueForTabBarPosition<string | number>(tabBarPosition, safeAreaSize, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const absolutePositionValue = getValueForTabBarPosition<any>(tabBarPosition, bottomSide, leftSide, rightSide);

    return useMemo(() => {
        return { width, height, flexDirection, ...absolutePositionValue };
    }, [width, height, flexDirection, absolutePositionValue]);
}
