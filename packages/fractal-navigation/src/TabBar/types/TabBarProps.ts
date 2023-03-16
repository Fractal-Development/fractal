import { LayerProps } from '@fractal-software/fractal-ui';
import { ReactNode } from 'react';
import { TabBarPosition } from './TabBarPosition';

export interface TabBarProps extends Omit<LayerProps, 'children'> {
    children?: ReactNode;
    tabBarPosition: TabBarPosition;
    logo?: ReactNode;
}
