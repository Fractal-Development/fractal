import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';
import { EventSource } from '../types';

export function useCleanEventSource(
    isDragging: boolean,
    eventSource: EventSource | undefined,
    setEventSource: Dispatch<SetStateAction<EventSource | undefined>>,
    onSlidingComplete: ((value: number) => void) | undefined,
    clampedValue: MutableRefObject<number>
): void {
    useEffect(() => {
        const shouldUpdate = !isDragging && eventSource !== 'keyboard' && eventSource != null;

        if (shouldUpdate) {
            onSlidingComplete?.(clampedValue.current);
            setEventSource(undefined);
        }

        if (eventSource === 'keyboard') {
            onSlidingComplete?.(clampedValue.current);
            setEventSource(undefined);
        }
    }, [isDragging, eventSource, onSlidingComplete, clampedValue, setEventSource]);
}
