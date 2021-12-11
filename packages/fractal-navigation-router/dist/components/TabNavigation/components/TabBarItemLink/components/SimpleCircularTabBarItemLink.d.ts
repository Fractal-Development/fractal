import { ReactElement } from 'react';
import { SimpleTabBarItemProps } from '@bma98/fractal-navigation';
export interface SimpleCircularTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    path: string;
}
export declare function SimpleCircularTabBarItemLink({ path, ...others }: SimpleCircularTabBarItemLinkProps): ReactElement;
