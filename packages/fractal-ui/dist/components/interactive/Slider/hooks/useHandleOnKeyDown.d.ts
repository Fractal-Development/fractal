import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { EventSource } from '../types';
export declare function useHandleOnKeyDown(maximumValue: number, minimumValue: number, step: number, defaultValue: number, setValue: (value: number) => void, clampedValue: MutableRefObject<number>, setEventSource: Dispatch<SetStateAction<EventSource | undefined>>, handleSlidingStart: () => void): (event: React.KeyboardEvent) => unknown;
