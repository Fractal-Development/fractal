import { useEffect } from 'react';
import { useAnimationState, UseAnimationState } from '@motify/core';
import { FractalVariants } from '../../../../sharedProps/AnimationProps';

export function useVariantState(
    currentVariant: string | undefined,
    variants: FractalVariants | undefined = { from: {} }
): UseAnimationState<any> | undefined {
    const animationState = useAnimationState<FractalVariants>(variants);
    console.log({ variants, animationState: JSON.stringify(animationState) });
    useEffect(() => {
        if (currentVariant && variants) {
            console.log({ currentVariant });
            animationState.transitionTo(currentVariant);
        }
    }, [animationState, currentVariant, variants]);

    return currentVariant && variants ? animationState : undefined;
}
