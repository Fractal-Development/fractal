import { useCallback, useMemo } from 'react';
import { clampValue, roundValueToStep } from '../utils';
export function useHandleOnKeyDown(maximumValue, minimumValue, step, defaultValue, setValue, clampedValue, setEventSource, handleSlidingStart) {
    const tenSteps = (maximumValue - minimumValue) / 10;
    const constrain = useCallback((value) => {
        value = roundValueToStep(value, minimumValue, step);
        value = clampValue(value, minimumValue, maximumValue);
        setValue(value);
    }, [minimumValue, step, maximumValue, setValue]);
    const actions = useMemo(() => ({
        stepUp: (nextStep = step) => {
            const next = clampedValue.current + nextStep;
            constrain(next);
        },
        stepDown: (nextStep = step) => {
            const next = clampedValue.current - nextStep;
            constrain(next);
        },
        reset: () => constrain(defaultValue)
    }), [constrain, clampedValue, step, defaultValue]);
    return useCallback((event) => {
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
    }, [actions, constrain, handleSlidingStart, maximumValue, minimumValue, tenSteps, setEventSource]);
}
//# sourceMappingURL=useHandleOnKeyDown.js.map