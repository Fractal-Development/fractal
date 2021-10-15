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
export const loadingCircleTransition = {
    duration: 0.6,
    yoyo: Infinity,
    ease: 'easeInOut'
};
export const loadingCircleTransitionTwo = Object.assign(Object.assign({}, loadingCircleTransition), { delay: 0.3 });
export const loadingCircleTransitionThree = Object.assign(Object.assign({}, loadingCircleTransition), { delay: 0.6 });
//# sourceMappingURL=index.js.map