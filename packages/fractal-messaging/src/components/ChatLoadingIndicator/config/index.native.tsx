export const loadingCircleVariants = {
    start: {
        scale: 0
    },
    end: {
        scale: 1
    }
};

export const loadingCircleTransition = {
    loop: true,
    duration: 600
};

export const loadingCircleTransitionTwo = {
    ...loadingCircleTransition,
    delay: 300
};

export const loadingCircleTransitionThree = {
    ...loadingCircleTransition,
    delay: 600
};
