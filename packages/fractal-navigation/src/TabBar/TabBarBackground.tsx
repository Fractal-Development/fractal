import React, { useMemo } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { TabBarProps } from './types';
import { useTabBarIsHidden, useTabBarPositionLayoutProps, useTabBarSafeAreaPadding } from './hooks';
import { tabBarCSSPosition } from './tabBarCSSPosition';

export function TabBarBackground(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const { tabBar } = useTheme();
    const layoutProps = useTabBarPositionLayoutProps(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const tabBarIsHidden = useTabBarIsHidden();

    const justifyContent = tabBarPosition === 'bottom' ? 'center' : 'flex-start';

    const variants = useMemo(() => {
        return {
            hidden: { ...layoutProps, opacity: 0 },
            visible: { ...layoutProps, opacity: 1 }
        };
    }, []);

    return (
        <Layer
            variants={variants}
            currentVariant={tabBarIsHidden ? 'hidden' : 'visible'}
            backgroundColor={tabBar.backgroundColor}
            boxShadow={tabBar.shadow}
            justifyContent={justifyContent}
            position={tabBarCSSPosition}
            zIndex={3000}
            {...layoutProps}
            {...tabBarSafeAreaPadding}
            {...props}
        />
    );
}
