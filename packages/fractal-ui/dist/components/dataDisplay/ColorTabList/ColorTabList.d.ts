import { ReactElement } from 'react';
import { LayerProps } from '../../layout';
import { ColorTabProps } from './ColorTab';
export interface ColorTabListProps extends LayerProps {
    tabs: Array<ColorTabProps>;
    children: (index: number) => ReactElement;
    onItemPress?: (index?: number) => void;
}
export declare function ColorTabList({ children, tabs, onItemPress, ...others }: ColorTabListProps): ReactElement;
