import Reanimated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback, useState } from 'react';

export function useColorAnimationCallbacks(
    backgroundColor: string | undefined,
    pressedBackgroundColor: string | undefined
): [Reanimated.SharedValue<number>, Array<string>, () => void, () => void, boolean] {
    const animatedValue = useSharedValue<number>(0);
    const [initialPressDone, setInitialPressDone] = useState(false);

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
        setInitialPressDone(true);
        if (colorsAvailable) {
            animatedValue.value = withTiming(1);
        }
    }, [animatedValue, colorsAvailable]);

    const resetAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = withTiming(0);
        }
    }, [animatedValue, colorsAvailable]);

    return [animatedValue, colors, startAnimation, resetAnimation, initialPressDone];
}
