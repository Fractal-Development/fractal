import Reanimated, { useSharedValue } from 'react-native-reanimated';
import { useCallback } from 'react';

export function useColorAnimationCallbacks(
    backgroundColor: string | undefined,
    pressedBackgroundColor: string | undefined
): [Reanimated.SharedValue<string | undefined>, () => void, () => void] {
    const animatedValue = useSharedValue<string | undefined>(backgroundColor);

    const colorsAvailable = backgroundColor != null && pressedBackgroundColor != null;

    const startAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = pressedBackgroundColor;
        }
    }, [animatedValue, colorsAvailable, pressedBackgroundColor]);

    const resetAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = backgroundColor;
        }
    }, [animatedValue, colorsAvailable, backgroundColor]);

    return [animatedValue, startAnimation, resetAnimation];
}
