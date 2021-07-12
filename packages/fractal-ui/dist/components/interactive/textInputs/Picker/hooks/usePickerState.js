import { useState, useCallback, useMemo } from 'react';
import { getInitialPickerIndex } from '../util/getInitialPickerIndex';
export function usePickerState(initialValue, items, valueProp, onChange) {
    const isControlled = valueProp !== undefined;
    const initialIndex = getInitialPickerIndex(initialValue, items);
    const [currentValue, setCurrentValue] = useState(initialValue !== null && initialValue !== void 0 ? initialValue : items[0][0]);
    const [indexState, setIndexState] = useState(initialIndex);
    const value = isControlled ? valueProp : currentValue;
    const index = isControlled ? getInitialPickerIndex(valueProp, items) : indexState;
    const handleValueChange = useCallback((itemValue, index) => {
        if (!isControlled) {
            setCurrentValue(itemValue.toString());
            setIndexState(index);
        }
        if (onChange != null) {
            onChange(items[index]);
        }
    }, [isControlled, onChange, items]);
    return useMemo(() => [value, handleValueChange, index], [value, index, handleValueChange]);
}
//# sourceMappingURL=usePickerState.js.map