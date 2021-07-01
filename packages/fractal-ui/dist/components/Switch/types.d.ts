import { LayerProps } from '../containers/Layer/types';
export interface BaseSwitchProps {
    value?: boolean;
    onValueChange?: (value: boolean) => void;
}
export interface SwitchProps extends BaseSwitchProps, Omit<LayerProps, 'children'> {
}
