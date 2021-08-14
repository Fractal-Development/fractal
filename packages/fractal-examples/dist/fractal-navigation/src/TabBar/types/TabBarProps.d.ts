import { TabBarPosition } from './TabBarPosition';
import { LayerProps } from '@bma98/fractal-ui';
import { ReactNode } from 'react';
export interface TabBarProps extends Omit<LayerProps, 'children'> {
    children?: ReactNode;
    tabBarPosition: TabBarPosition;
}
