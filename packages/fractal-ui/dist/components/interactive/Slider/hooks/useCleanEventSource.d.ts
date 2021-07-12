import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { EventSource } from '../types';
export declare function useCleanEventSource(isDragging: boolean, eventSource: EventSource | undefined, setEventSource: Dispatch<SetStateAction<EventSource | undefined>>, onSlidingComplete: ((value: number) => void) | undefined, clampedValue: MutableRefObject<number>): void;
