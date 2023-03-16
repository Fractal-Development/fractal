import React, { ReactElement } from 'react';
import { SimpleTabBarItem, SimpleTabBarItemProps } from '@fractal-software/fractal-navigation';
import { useMatch, useNavigate, useResolvedPath } from '../router';

export interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    to: string;
}

export function SimpleTabBarItemLink({ to, ...others }: SimpleTabBarItemLinkProps): ReactElement {
    const navigate = useNavigate();
    const path = useResolvedPath(to);
    const match = useMatch({ path: path.pathname, end: false });
    const isRouteActive = match != null;

    const goToTab = () => {
        navigate(to);
    };

    return <SimpleTabBarItem {...others} tabIdentifier={to} onTabPress={goToTab} active={isRouteActive} />;
}
