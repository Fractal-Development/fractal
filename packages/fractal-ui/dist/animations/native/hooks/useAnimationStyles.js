import { useAnimatedStyle } from 'react-native-reanimated';
import { insertTransitionValueAnimated } from '../worklets/insertTransitionValueAnimated';
import { usePresence } from 'framer-motion';
import { insertTransformTransitionValueAnimated } from '../worklets/insertTransformTransitionValueAnimated';
import { useAnimationContent } from './useAnimationContent';
import { useSharedValueEffect } from './useSharedValueEffect';
import { useCallback } from 'react';
export function useAnimationStyles({ initial, animate, exit, variants, transition = { type: 'spring' } }) {
    const [isPresent, setIsSafeToRemove] = usePresence();
    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);
    const exitAnimationContent = useAnimationContent(exit, variants);
    // Base properties
    const opacitySharedValue = useSharedValueEffect(initialAnimationContent.opacity, animateAnimationContent.opacity, exitAnimationContent.opacity, isPresent);
    const widthSharedValue = useSharedValueEffect(initialAnimationContent.width, animateAnimationContent.width, exitAnimationContent.width, isPresent);
    const heightSharedValue = useSharedValueEffect(initialAnimationContent.height, animateAnimationContent.height, exitAnimationContent.height, isPresent);
    const backgroundColorSharedValue = useSharedValueEffect(initialAnimationContent.backgroundColor, animateAnimationContent.backgroundColor, exitAnimationContent.backgroundColor, isPresent);
    // Transform properties
    const scaleSharedValue = useSharedValueEffect(initialAnimationContent.scale, animateAnimationContent.scale, exitAnimationContent.scale, isPresent);
    const rotationSharedValue = useSharedValueEffect(initialAnimationContent.rotate, animateAnimationContent.rotate, exitAnimationContent.rotate, isPresent);
    const translateXSharedValue = useSharedValueEffect(initialAnimationContent.translateX, animateAnimationContent.translateX, exitAnimationContent.translateX, isPresent);
    const translateYSharedValue = useSharedValueEffect(initialAnimationContent.translateY, animateAnimationContent.translateY, exitAnimationContent.translateY, isPresent);
    const removeIfFinished = useCallback((finished) => {
        if (!isPresent && finished && setIsSafeToRemove) {
            setIsSafeToRemove();
        }
    }, [isPresent, setIsSafeToRemove]);
    return useAnimatedStyle(() => {
        const styles = {
            transform: []
        };
        insertTransitionValueAnimated(styles, 'opacity', opacitySharedValue.value, transition, removeIfFinished);
        insertTransitionValueAnimated(styles, 'width', widthSharedValue.value, transition, removeIfFinished);
        insertTransitionValueAnimated(styles, 'height', heightSharedValue.value, transition, removeIfFinished);
        insertTransitionValueAnimated(styles, 'backgroundColor', backgroundColorSharedValue.value, transition, removeIfFinished);
        insertTransformTransitionValueAnimated(styles, 'scale', scaleSharedValue.value, transition, removeIfFinished);
        insertTransformTransitionValueAnimated(styles, 'rotate', rotationSharedValue.value, transition, removeIfFinished);
        insertTransformTransitionValueAnimated(styles, 'translateX', translateXSharedValue.value, transition, removeIfFinished);
        insertTransformTransitionValueAnimated(styles, 'translateY', translateYSharedValue.value, transition, removeIfFinished);
        return styles;
    });
}
//# sourceMappingURL=useAnimationStyles.js.map