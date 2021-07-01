import { useCallback } from 'react';
import { clampValue, valueToPercentage, percentageToValue, roundValueToStep } from '../utils';
export function useHandleSliderMove(maximumValue, minimumValue, step, setValue, thumbRef, diffRef, sliderRef) {
    const getValueFromPointer = useCallback((event) => {
        var _a, _b;
        if (!thumbRef.current)
            return undefined;
        const { clientX } = (_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : event;
        let newX = clientX - diffRef.current - sliderRef.current.getBoundingClientRect().left;
        const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
        const start = 0;
        if (newX < start) {
            newX = 0;
        }
        if (newX > end) {
            newX = end;
        }
        const percentage = valueToPercentage(newX, start, end);
        let nextValue = percentageToValue(percentage, minimumValue, maximumValue);
        nextValue = roundValueToStep(nextValue, minimumValue, step);
        nextValue = clampValue(nextValue, minimumValue, maximumValue);
        return nextValue;
    }, [maximumValue, minimumValue, step, thumbRef, diffRef, sliderRef]);
    return useCallback((event) => {
        const newValue = getValueFromPointer(event);
        if (newValue != null)
            setValue(newValue);
    }, [getValueFromPointer, setValue]);
}
//# sourceMappingURL=useHandleSliderMove.js.map