import { ReactElement } from 'react';
import { LayerProps } from '../../layout';
import { ColorTabProps } from './ColorTab';
export interface ColorTabListProps extends LayerProps {
    tabs: Array<ColorTabProps>;
    defaultActiveIndex?: number;
    children: (index: number) => ReactElement;
    onItemPress?: (index?: number) => void;
}
export declare function ColorTabList({ children, tabs, defaultActiveIndex, onItemPress, ...others }: ColorTabListProps): ReactElement;
