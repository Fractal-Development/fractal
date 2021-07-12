import { LayerProps } from '../../layout';

export interface CheckProps {
    value: boolean;
    label?: string;
}

export interface BaseCheckBoxProps extends CheckProps {
    onValueChange?: (value: boolean) => void;
}

export interface CheckBoxProps extends Omit<BaseCheckBoxProps, 'value'>, Omit<LayerProps, 'children'> {
    value?: boolean;
}
