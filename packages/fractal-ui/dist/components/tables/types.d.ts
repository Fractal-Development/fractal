import { ReactNode } from 'react';
import { LayerProps } from '../containers/Layer/types';
import { ButtonVariant } from '../buttons/types/ButtonVariant';
export declare type TextColorVariant = ButtonVariant | 'text';
export interface TableContainerProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    children?: ReactNode;
    titleTextVariant?: 'title' | 'subtitle' | 'normal';
    titleColorVariant?: TextColorVariant;
    label?: string;
    labelColorVariant?: TextColorVariant;
}
