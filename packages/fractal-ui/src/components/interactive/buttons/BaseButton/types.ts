import { PressableProps } from '../Pressable/types';

export interface BaseButtonProps extends Omit<PressableProps, 'variants' | 'currentVariant'> {
    pressedBackgroundColor?: string;
}
