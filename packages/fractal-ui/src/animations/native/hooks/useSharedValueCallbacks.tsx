import Reanimated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useCallback } from 'react';

export function useSharedValueCallbacks(
    initialValue: number | string | undefined,
    finalValue: number | string | undefined
): [Reanimated.SharedValue<number | string | undefined>, () => void, () => void] {
    const animatedValue = useSharedValue<undefined | number | string>(initialValue);

    const startAnimation = useCallback(() => {
        if (finalValue != null && animatedValue.value !== finalValue) {
            animatedValue.value = withSpring(finalValue);
        }
    }, [animatedValue, finalValue]);

    const resetAnimation = useCallback(() => {
        if (initialValue != null && animatedValue.value !== initialValue) {
            animatedValue.value = withSpring(initialValue);
        }
    }, [animatedValue, initialValue]);

    return [animatedValue, startAnimation, resetAnimation];
}
