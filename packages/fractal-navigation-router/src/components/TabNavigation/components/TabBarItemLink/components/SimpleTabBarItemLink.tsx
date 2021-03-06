import React, { ReactElement } from 'react';
import { SimpleTabBarItem, SimpleTabBarItemProps } from '@bma98/fractal-navigation';
import { useIsRouteActive } from '../../../../../hooks/useIsRouteActive';
import { useGoToTab } from '../hooks/useGoToTab';

export interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    path: string;
}

export function SimpleTabBarItemLink({ path, ...others }: SimpleTabBarItemLinkProps): ReactElement {
    const isRouteActive = useIsRouteActive(path, false);
    const goToTab = useGoToTab(path, isRouteActive);

    return <SimpleTabBarItem {...others} tabIdentifier={path} onTabPress={goToTab} active={isRouteActive} />;
}
