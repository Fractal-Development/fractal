import { useCallback, useRef } from 'react';

interface Options {
    shouldPreventDefault?: boolean;
    delay?: number;
}

const isTouchEvent = (event: Event): event is TouchEvent => 'touches' in event;

const preventDefault = (event: Event): void => {
    if (!isTouchEvent(event)) return undefined;
};

export const useLongPress = (callback: (() => void) | undefined, options: Options = {}): any => {
    const { shouldPreventDefault = true, delay = 300 } = options;
    const timeout = useRef<ReturnType<typeof setTimeout>>();
    const target = useRef<EventTarget>();

    const start = useCallback(
        (event: TouchEvent | MouseEvent) => {
            // prevent ghost click on mobile devices
            if (shouldPreventDefault && event.target) {
                event.target.addEventListener('touchend', preventDefault, { passive: false });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => callback?.(), delay);
        },
        [callback, delay, shouldPreventDefault]
    );

    const clear = useCallback(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        if (shouldPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, [shouldPreventDefault]);

    return {
        onMouseDown: (e: any) => start(e),
        onTouchStart: (e: any) => start(e),
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear
    };
};
