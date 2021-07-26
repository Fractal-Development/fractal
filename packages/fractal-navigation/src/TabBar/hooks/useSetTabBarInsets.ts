import { useContext, useLayoutEffect } from 'react';
import { getTabBarSizeForPosition } from '../util';
import { useTabBarIsHidden } from './useTabBarIsHidden';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';
import { useTabBarPosition } from './useTabBarPosition';

export function useSetTabBarInsets(): void {
    const tabBarPosition = useTabBarPosition();
    const tabBarIsHidden = useTabBarIsHidden();
    const size = getTabBarSizeForPosition(tabBarPosition, tabBarIsHidden);
    const [, setTabBarInsets] = useContext(TabBarInsetsContext);

    useLayoutEffect(() => {
        setTabBarInsets({
            top: 0,
            right: tabBarPosition === 'right' ? size : 0,
            bottom: tabBarPosition === 'bottom' ? size : 0,
            left: tabBarPosition === 'left' ? size : 0
        });
    }, [tabBarPosition, setTabBarInsets, size]);
}
