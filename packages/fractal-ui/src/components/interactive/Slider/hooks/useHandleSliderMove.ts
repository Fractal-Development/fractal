import { RefObject, useCallback } from 'react';
import { clampValue, valueToPercentage, percentageToValue, roundValueToStep } from '../utils';

export function useHandleSliderMove(
    maximumValue: number,
    minimumValue: number,
    step: number,
    setValue: (value: number) => void,
    thumbRef: RefObject<any>,
    diffRef: RefObject<any>,
    sliderRef: RefObject<any>
): (event: any) => void {
    const getValueFromPointer = useCallback(
        (event): number | undefined => {
            if (!thumbRef.current) return undefined;
            const { clientX } = event.touches?.[0] ?? event;
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
        },
        [maximumValue, minimumValue, step, thumbRef, diffRef, sliderRef]
    );

    return useCallback(
        (event) => {
            const newValue = getValueFromPointer(event);
            if (newValue != null) setValue(newValue);
        },
        [getValueFromPointer, setValue]
    );
}
