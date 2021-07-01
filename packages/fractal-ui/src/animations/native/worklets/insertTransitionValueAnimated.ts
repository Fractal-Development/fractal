import { Easing, runOnJS, withSpring, withTiming } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { AnimationContent, FractalTransition } from '../../../sharedProps';
import { OptionalKeys } from 'utility-types';

export function insertTransitionValueAnimated(
    animatedStyles: ViewStyle,
    propertyName: OptionalKeys<AnimationContent>,
    value?: number | string,
    transition?: FractalTransition,
    callback?: ((finished: boolean) => void) | null
): void {
    'worklet';

    if (value != null) {
        const animationCallback = (finished) => {
            if (callback != null) {
                runOnJS(callback)(finished);
            }
        };

        if (transition?.type === 'ease' && transition?.duration != null) {
            const animationConfig = {
                duration: transition?.duration,
                easing: Easing.inOut(Easing.ease)
            };

            animatedStyles[propertyName] = withTiming(value, animationConfig, animationCallback);
        } else {
            animatedStyles[propertyName] = withSpring(value, undefined, animationCallback);
        }
    }
}
