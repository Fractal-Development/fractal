import Reanimated from 'react-native-reanimated';
import { useEffect } from 'react';

export function useFinalAnimationEffect(
    animatedValue: Reanimated.SharedValue<string | number | undefined>,
    finalValue: number | string | undefined,
    isPresent = true
): void {
    useEffect(() => {
        if (finalValue != null && isPresent) {
            animatedValue.value = finalValue;
        }
    }, [finalValue, animatedValue, isPresent]);
}
