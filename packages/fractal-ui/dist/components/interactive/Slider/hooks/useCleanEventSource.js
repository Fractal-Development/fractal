import { useEffect } from 'react';
export function useCleanEventSource(isDragging, eventSource, setEventSource, onSlidingComplete, clampedValue) {
    useEffect(() => {
        const shouldUpdate = !isDragging && eventSource !== 'keyboard' && eventSource != null;
        if (shouldUpdate) {
            onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(clampedValue.current);
            setEventSource(undefined);
        }
        if (eventSource === 'keyboard') {
            onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(clampedValue.current);
            setEventSource(undefined);
        }
    }, [isDragging, eventSource, onSlidingComplete, clampedValue, setEventSource]);
}
//# sourceMappingURL=useCleanEventSource.js.map