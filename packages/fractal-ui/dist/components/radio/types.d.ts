import { LayerProps } from '../containers/Layer/types';
export interface RadioControlProps {
    active: boolean;
    label?: string;
}
export interface BaseRadioButtonProps extends RadioControlProps {
    value: string;
    onPress: () => void;
}
export interface RadioButtonProps extends BaseRadioButtonProps, Omit<LayerProps, 'children'> {
}
export interface RadioItem {
    value: string;
    label: string;
}
export interface RadioGroupProps extends LayerProps {
    value?: string;
    defaultValue?: string;
    radioButtons: Array<RadioItem>;
    onValueChange: (value: string) => void;
}
