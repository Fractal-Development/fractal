import { useContext, useLayoutEffect } from 'react';
import { useTabBarIsHidden } from './useTabBarIsHidden';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';
import { useTabBarPosition } from './useTabBarPosition';
import { useTabBarSizeForPosition } from './useTabBarSizeForPosition';
export function useSetTabBarInsets() {
    const tabBarPosition = useTabBarPosition();
    const tabBarIsHidden = useTabBarIsHidden();
    const size = useTabBarSizeForPosition(tabBarPosition, tabBarIsHidden);
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
//# sourceMappingURL=useSetTabBarInsets.js.map