import { useState, useCallback, useMemo } from 'react';
import { getInitialPickerIndex } from '../util/getInitialPickerIndex';

export function usePickerState(
    initialValue: string | undefined,
    items: Array<[string, string]>,
    valueProp?: string,
    onChange?: (pair: [string, string]) => void
): [string, (value: string, index: number) => void, number] {
    const isControlled = valueProp !== undefined;
    const initialIndex = getInitialPickerIndex(initialValue, items);
    const [currentValue, setCurrentValue] = useState(initialValue ?? items[0][0]);
    const [indexState, setIndexState] = useState(initialIndex);
    const value: string = isControlled ? (valueProp as string) : currentValue;
    const index = isControlled ? getInitialPickerIndex(valueProp, items) : indexState;

    const handleValueChange = useCallback(
        (itemValue, index) => {
            if (!isControlled) {
                setCurrentValue(itemValue.toString());
                setIndexState(index);
            }
            if (onChange != null) {
                onChange(items[index]);
            }
        },
        [isControlled, onChange, items]
    );

    return useMemo(() => [value, handleValueChange, index], [value, index, handleValueChange]);
}
