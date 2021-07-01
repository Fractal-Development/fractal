import { useCallback, useState } from 'react';
export function useControllableState(value, defaultValue, onChange) {
    const [internalState, setInternalState] = useState(defaultValue);
    const isControlled = value !== undefined;
    const updateValue = useCallback((nextValue) => {
        if (!isControlled) {
            setInternalState(nextValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
    }, [isControlled, onChange]);
    return [isControlled ? value : internalState, updateValue];
}
//# sourceMappingURL=useControllableState.js.map