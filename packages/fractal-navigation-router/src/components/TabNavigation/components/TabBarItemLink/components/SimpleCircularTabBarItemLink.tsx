import React, { ReactElement } from 'react';
import { SimpleCircularTabBarItem, SimpleTabBarItemProps } from '@bma98/fractal-navigation';
import { useIsRouteActive } from '../../../../../hooks/useIsRouteActive';
import { useGoToTab } from '../hooks/useGoToTab';

export interface SimpleCircularTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    path: string;
}

export function SimpleCircularTabBarItemLink({ path, ...others }: SimpleCircularTabBarItemLinkProps): ReactElement {
    const isRouteActive = useIsRouteActive(path, false);
    const goToTab = useGoToTab(path, isRouteActive);

    return <SimpleCircularTabBarItem {...others} tabIdentifier={path} onTabPress={goToTab} />;
}
