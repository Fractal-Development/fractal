import { SimpleTabBarItemProps } from '@bma98/fractal-navigation';
import { ReactElement } from 'react';
export interface SimpleCircularTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress' | 'tabIdentifier'> {
    path: string;
}
export declare function SimpleCircularTabBarItemLink({ path, ...others }: SimpleCircularTabBarItemLinkProps): ReactElement;
