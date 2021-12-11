import { ReactElement } from 'react';
import { SimpleTabBarItemProps } from '@bma98/fractal-navigation';
export interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    path: string;
}
export declare function SimpleTabBarItemLink({ path, ...others }: SimpleTabBarItemLinkProps): ReactElement;
