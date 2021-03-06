import { useContext, useEffect } from 'react';
import { useTabBarIsHidden } from './useTabBarIsHidden';
import { TabBarInsetsContext } from '../context';
import { useTabBarPosition } from './useTabBarPosition';
import { useTabBarSizeForPosition } from './useTabBarSizeForPosition';
import { useSafeAreaInsets } from './useSafeAreaInsets';

export function useSetTabBarInsets(): void {
    const tabBarPosition = useTabBarPosition();
    const tabBarIsHidden = useTabBarIsHidden();
    const size = useTabBarSizeForPosition(tabBarPosition, tabBarIsHidden);
    const safeAreaInsets = useSafeAreaInsets();
    const [, setTabBarInsets] = useContext(TabBarInsetsContext);

    useEffect(() => {
        setTabBarInsets({
            top: 0,
            right: tabBarPosition === 'right' ? size + safeAreaInsets.right : 0,
            bottom: tabBarPosition === 'bottom' ? size + safeAreaInsets.bottom : 0,
            left: tabBarPosition === 'left' ? size + safeAreaInsets.left : 0
        });
    }, [tabBarPosition, setTabBarInsets, size, safeAreaInsets]);
}
