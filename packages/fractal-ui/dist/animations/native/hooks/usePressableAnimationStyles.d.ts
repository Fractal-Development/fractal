import { PressableProps } from '../../../components/interactive/buttons/Pressable/types';
import { ViewStyle } from 'react-native';
export declare function usePressableAnimationStyles({ whileTap, opacity, width, height, backgroundColor, onPressOut, onPressIn }: PressableProps): [ViewStyle, () => void, () => void];
