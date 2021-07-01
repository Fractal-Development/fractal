import Reanimated, { useSharedValue } from 'react-native-reanimated';
import { useFinalAnimationEffect } from './useFinalAnimationEffect';
import { useExitAnimationEffect } from './useExitAnimationEffect';

export function useSharedValueEffect(
    initialValue: number | string | undefined,
    finalValue: number | string | undefined,
    exitValue: number | string | undefined,
    isPresent = true
): Reanimated.SharedValue<number | string | undefined> {
    const animatedValue = useSharedValue(initialValue);

    useFinalAnimationEffect(animatedValue, finalValue, isPresent);
    useExitAnimationEffect(animatedValue, exitValue, isPresent);

    return animatedValue;
}
