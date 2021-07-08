import { useEffect } from 'react';
import { useAnimationState, UseAnimationState } from '@motify/core';
import { FractalVariants } from '../../../sharedProps/AnimationProps';

export function useVariantState(
    currentVariant: string | undefined,
    variants: FractalVariants | undefined = { from: {} }
): UseAnimationState<any> | undefined {
    const animationState = useAnimationState<FractalVariants>(variants);

    useEffect(() => {
        if (currentVariant && variants) {
            animationState.transitionTo(currentVariant);
        }
    }, [animationState, currentVariant, variants]);

    return currentVariant && variants ? animationState : undefined;
}
