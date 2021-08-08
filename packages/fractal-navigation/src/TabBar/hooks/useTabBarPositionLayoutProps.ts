import { getValueForTabBarPosition } from '../util';
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
    translateY: number;
    translateX: number;
}

const bottomSide = { bottom: 0 };
const leftSide = { left: 0 };
const rightSide = { right: 0 };

export function useTabBarPositionLayoutProps(tabBarPosition: TabBarPosition): PositionValue {
    const safeAreaSize = useTabBarSafeAreaSizeForPosition(tabBarPosition);

    const width = getValueForTabBarPosition<string | number>(tabBarPosition, '100%', safeAreaSize, safeAreaSize);
    const height = getValueForTabBarPosition<string | number>(tabBarPosition, safeAreaSize, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const absolutePositionValue = getValueForTabBarPosition<any>(tabBarPosition, bottomSide, leftSide, rightSide);

    const translateSize = safeAreaSize + 20;
    const translateY = getValueForTabBarPosition(tabBarPosition, translateSize, 0, 0);
    const translateX = getValueForTabBarPosition(tabBarPosition, 0, -1 * translateSize, translateSize);

    return useMemo(() => {
        return { width, height, flexDirection, translateY, translateX, ...absolutePositionValue };
    }, [width, height, flexDirection, absolutePositionValue, translateY, translateX]);
}
