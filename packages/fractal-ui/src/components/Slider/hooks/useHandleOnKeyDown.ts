import React, { Dispatch, MutableRefObject, SetStateAction, useCallback, useMemo } from 'react';
import { clampValue, roundValueToStep } from '../utils';
import { EventSource } from '../types';

export function useHandleOnKeyDown(
    maximumValue: number,
    minimumValue: number,
    step: number,
    defaultValue: number,
    setValue: (value: number) => void,
    clampedValue: MutableRefObject<number>,
    setEventSource: Dispatch<SetStateAction<EventSource | undefined>>,
    handleSlidingStart: () => void
): (event: React.KeyboardEvent) => unknown {
    const tenSteps = (maximumValue - minimumValue) / 10;

    const constrain = useCallback(
        (value: number) => {
            value = roundValueToStep(value, minimumValue, step);
            value = clampValue(value, minimumValue, maximumValue);
            setValue(value);
        },
        [minimumValue, step, maximumValue, setValue]
    );

    const actions = useMemo(
        () => ({
            stepUp: (nextStep = step) => {
                const next = clampedValue.current + nextStep;
                constrain(next);
            },
            stepDown: (nextStep = step) => {
                const next = clampedValue.current - nextStep;
                constrain(next);
            },
            reset: () => constrain(defaultValue)
        }),
        [constrain, clampedValue, step, defaultValue]
    );

    return useCallback(
        (event: React.KeyboardEvent) => {
            const { key } = event;
            const keyMap = {
                ArrowRight: () => actions.stepUp(),
                ArrowUp: () => actions.stepUp(),
                ArrowLeft: () => actions.stepDown(),
                ArrowDown: () => actions.stepDown(),
                PageUp: () => actions.stepUp(tenSteps),
                PageDown: () => actions.stepDown(tenSteps),
                Home: () => constrain(minimumValue),
                End: () => constrain(maximumValue)
            };

            const action = keyMap[key];

            if (action) {
                event.preventDefault();
                event.stopPropagation();
                setEventSource('keyboard');
                handleSlidingStart();
                action(event);
            }
        },
        [actions, constrain, handleSlidingStart, maximumValue, minimumValue, tenSteps, setEventSource]
    );
}
