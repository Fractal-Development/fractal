import { ReactNode } from 'react';

import { ButtonVariant } from '../../interactive/buttons/types/ButtonVariant';
import { LayerProps } from '../Layer/types';

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
