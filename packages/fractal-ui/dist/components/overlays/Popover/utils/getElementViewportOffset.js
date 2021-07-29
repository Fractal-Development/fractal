const flipSign = (x) => x * -1;
export function getElementViewportOffset(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top - offset,
        bottom: flipSign(rect.bottom - window.innerHeight) - offset,
        left: rect.left - offset,
        right: flipSign(rect.right - window.innerWidth) - offset
    };
}
//# sourceMappingURL=getElementViewportOffset.js.map