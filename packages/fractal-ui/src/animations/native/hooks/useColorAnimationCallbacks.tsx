import Reanimated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback } from 'react';

export function useColorAnimationCallbacks(
    backgroundColor: string | undefined,
    pressedBackgroundColor: string | undefined
): [Reanimated.SharedValue<number>, Array<string>, () => void, () => void] {
    const animatedValue = useSharedValue<number>(0);

    const colorsAvailable = backgroundColor != null && pressedBackgroundColor != null;

    const colors = (() => {
        const colors = Array<string>();

        if (backgroundColor != null) {
            colors.push(backgroundColor);
        }

        if (pressedBackgroundColor != null) {
            colors.push(pressedBackgroundColor);
        }

        return colors;
    })();

    const startAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = withTiming(1);
        }
    }, [animatedValue, colorsAvailable]);

    const resetAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = withTiming(0);
        }
    }, [animatedValue, colorsAvailable]);

    return [animatedValue, colors, startAnimation, resetAnimation];
}
