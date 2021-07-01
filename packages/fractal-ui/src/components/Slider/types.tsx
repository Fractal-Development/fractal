import { LayerProps } from '../containers/Layer/types';

export type EventSource = 'mouse' | 'touch' | 'keyboard';

export interface BaseSliderProps {
    maximumValue?: number;
    minimumValue?: number;
    onSlidingComplete?: (value: number) => void;
    onSlidingStart?: (value: number) => void;
    onValueChange?: (value: number) => void;
    step?: number;
    defaultValue?: number;
    value?: number;
    name?: string;
}

export interface SliderProps extends BaseSliderProps, Omit<LayerProps, 'children'> {}
