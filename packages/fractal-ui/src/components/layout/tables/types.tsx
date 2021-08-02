import { ReactNode } from 'react';
import { LayerProps } from '../Layer/types';
import { ButtonVariant } from '../../interactive/buttons/types/ButtonVariant';

export type TextColorVariant = ButtonVariant | 'text';

export interface TableContainerProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    children?: ReactNode;
    titleTextVariant?: 'title' | 'subtitle' | 'normal';
    titleColorVariant?: TextColorVariant;
    label?: string;
    labelTextVariant?: 'label' | 'subtitle';
    labelColorVariant?: TextColorVariant;
}
