import { SimpleTabBarItemProps } from '@bma98/fractal-navigation';
import { ReactElement } from 'react';
export interface SimpleTabBarItemLinkProps extends Omit<SimpleTabBarItemProps, 'active' | 'onTabPress'> {
    path: string;
}
export declare function SimpleTabBarItemLink({ path, ...others }: SimpleTabBarItemLinkProps): ReactElement;
