import React, { useMemo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useTabBarIsHidden, useTabBarPositionLayoutProps, useTabBarSafeAreaPadding } from './hooks';
import { tabBarCSSPosition } from './tabBarCSSPosition';
export function TabBarBackground(props) {
    const { tabBarPosition } = props;
    const { tabBar } = useTheme();
    const layoutProps = useTabBarPositionLayoutProps(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const tabBarIsHidden = useTabBarIsHidden();
    const justifyContent = tabBarPosition === 'bottom' ? 'center' : 'flex-start';
    const variants = useMemo(() => {
        return {
            hidden: Object.assign(Object.assign({}, layoutProps), { opacity: 0 }),
            visible: Object.assign(Object.assign({}, layoutProps), { opacity: 1 })
        };
    }, []);
    return (React.createElement(Layer, Object.assign({ variants: variants, currentVariant: tabBarIsHidden ? 'hidden' : 'visible', backgroundColor: tabBar.backgroundColor, boxShadow: tabBar.shadow, justifyContent: justifyContent, position: tabBarCSSPosition, zIndex: 3000 }, layoutProps, tabBarSafeAreaPadding, props)));
}
//# sourceMappingURL=TabBarBackground.js.map