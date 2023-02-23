import { MotiTransition } from 'moti';
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
export const loadingCircleTransition: MotiTransition = {
    loop: true,
    duration: 900,
    type: 'timing',
    delay: 0
};

export const loadingCircleTransitionTwo = {
    ...loadingCircleTransition,
    delay: 300
};

export const loadingCircleTransitionThree = {
    ...loadingCircleTransition,
    delay: 600
};
