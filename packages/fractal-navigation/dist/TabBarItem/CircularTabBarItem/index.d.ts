import { ButtonProps } from '@bma98/fractal-ui';
import { ReactElement } from 'react';
import { SharedTabItemProps } from '../types/SharedTabItemProps';
export interface CircularTabBarItemProps extends SharedTabItemProps, Omit<ButtonProps, 'children' | 'onPress'> {
    children: (color: string, size: number) => JSX.Element;
}
export declare function CircularTabBarItem({ children, ...others }: CircularTabBarItemProps): ReactElement;
