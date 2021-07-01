import { useCallback, useRef } from 'react';
const isTouchEvent = (event) => {
    return 'touches' in event;
};
const preventDefault = (event) => {
    if (!isTouchEvent(event))
        return;
};
export const useLongPress = (callback, options = {}) => {
    const { shouldPreventDefault = true, delay = 300 } = options;
    const timeout = useRef();
    const target = useRef();
    const start = useCallback((event) => {
        // prevent ghost click on mobile devices
        if (shouldPreventDefault && event.target) {
            event.target.addEventListener('touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(() => callback === null || callback === void 0 ? void 0 : callback(), delay);
    }, [callback, delay, shouldPreventDefault]);
    const clear = useCallback(() => {
        timeout.current && clearTimeout(timeout.current);
        if (shouldPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, [shouldPreventDefault]);
    return {
        onMouseDown: (e) => start(e),
        onTouchStart: (e) => start(e),
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear
    };
};
//# sourceMappingURL=useLongPress.js.map