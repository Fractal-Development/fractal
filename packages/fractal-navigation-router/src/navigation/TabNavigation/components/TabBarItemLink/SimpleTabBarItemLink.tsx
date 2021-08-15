import React, { SimpleTabBarItem, SimpleTabBarItemProps } from '@bma98/fractal-navigation';
import { ReactElement } from 'react';
import { useIsRouteActive } from '../../../../hooks/useIsRouteActive';
import { useGoToTab } from './hooks/useGoToTab';

export interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress'> {
    path: string;
}

export function SimpleTabBarItemLink({ path, ...others }: SimpleTabBarItemLinkProps): ReactElement {
    const isRouteActive = useIsRouteActive(path, false);
    const goToTab = useGoToTab(path, isRouteActive);

    return <SimpleTabBarItem {...others} onTabPress={goToTab} active={isRouteActive} />;
}
