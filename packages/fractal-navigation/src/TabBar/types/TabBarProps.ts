import { TabBarPosition } from './TabBarPosition';
import { LayerProps } from '@bma98/fractal-ui';

export interface TabBarProps extends Omit<LayerProps, 'children'> {
    children?: Array<JSX.Element> | JSX.Element;
    tabBarPosition: TabBarPosition;
}
