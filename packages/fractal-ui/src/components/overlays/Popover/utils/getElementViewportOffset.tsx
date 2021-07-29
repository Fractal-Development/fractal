const flipSign = (x: number) => x * -1;

export function getElementViewportOffset(
    element: HTMLDivElement,
    offset = 0
): {
    top: number;
    bottom: number;
    left: number;
    right: number;
} {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.top - offset,
        bottom: flipSign(rect.bottom - window.innerHeight) - offset,
        left: rect.left - offset,
        right: flipSign(rect.right - window.innerWidth) - offset
    };
}
