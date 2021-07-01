import { useSharedValue } from 'react-native-reanimated';
import { useFinalAnimationEffect } from './useFinalAnimationEffect';
import { useExitAnimationEffect } from './useExitAnimationEffect';
export function useSharedValueEffect(initialValue, finalValue, exitValue, isPresent = true) {
    const animatedValue = useSharedValue(initialValue);
    useFinalAnimationEffect(animatedValue, finalValue, isPresent);
    useExitAnimationEffect(animatedValue, exitValue, isPresent);
    return animatedValue;
}
//# sourceMappingURL=useSharedValueEffect.js.map