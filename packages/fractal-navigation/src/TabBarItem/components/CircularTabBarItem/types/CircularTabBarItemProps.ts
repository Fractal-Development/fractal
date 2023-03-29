import { ButtonProps } from '@fractal-software/fractal-ui';
import { SharedTabItemProps } from '../../../types/SharedTabItemProps';

export interface CircularTabBarItemProps extends SharedTabItemProps, Omit<ButtonProps, 'children' | 'onPress'> {
    children: (color: string, size: number) => JSX.Element;
}
