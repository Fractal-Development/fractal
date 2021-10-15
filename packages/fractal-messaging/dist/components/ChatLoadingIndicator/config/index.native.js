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
    loop: true,
    duration: 600,
    type: 'timing'
};
export const loadingCircleTransitionTwo = Object.assign(Object.assign({}, loadingCircleTransition), { delay: 300 });
export const loadingCircleTransitionThree = Object.assign(Object.assign({}, loadingCircleTransition), { delay: 600 });
//# sourceMappingURL=index.native.js.map