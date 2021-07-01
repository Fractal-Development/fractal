import Reanimated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback, useMemo } from 'react';

export function useColorAnimationCallbacks(
    backgroundColor: string | undefined,
    pressedBackgroundColor: string | undefined
): [Reanimated.SharedValue<number>, Array<string>, () => void, () => void] {
    const animatedValue = useSharedValue<number>(0);

    const colorsAvailable = backgroundColor != null && pressedBackgroundColor != null;

    const colors = useMemo(() => {
        const colors = Array<string>();

        if (backgroundColor != null) {
            colors.push(backgroundColor);
        }

        if (pressedBackgroundColor != null) {
            colors.push(pressedBackgroundColor);
        }

        return colors;
    }, [backgroundColor, pressedBackgroundColor]);

    const startAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = withTiming(1, { duration: 200, easing: Easing.ease });
        }
    }, [animatedValue, colorsAvailable]);

    const resetAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = withTiming(0, { duration: 200, easing: Easing.ease });
        }
    }, [animatedValue, colorsAvailable]);

    return [animatedValue, colors, startAnimation, resetAnimation];
}
