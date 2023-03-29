import { AnimationProps } from '@fractal-software/fractal-ui';
export const loadingCircleVariants = {
    start: {
        opacity: 0,
        scale: 0
    },
    end: {
        opacity: 1,
        scale: 1
    }
};

export const loadingCircleTransition: AnimationProps['transition'] = {
    duration: 0.6,
    repeatType: 'reverse',
    repeat: Infinity,
    ease: 'easeInOut'
};

export const loadingCircleTransitionTwo = {
    ...loadingCircleTransition,
    delay: 0.3
};

export const loadingCircleTransitionThree = {
    ...loadingCircleTransition,
    delay: 0.6
};
