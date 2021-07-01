import { useCallback, useState } from 'react';

export function useControllableState<T>(value?: T, defaultValue?: T | (() => T), onChange?: (value: T) => void): [T, (valu: T) => void] {
    const [internalState, setInternalState] = useState(defaultValue as T);

    const isControlled = value !== undefined;

    const updateValue = useCallback(
        (nextValue: T) => {
            if (!isControlled) {
                setInternalState(nextValue);
            }
            onChange?.(nextValue);
        },
        [isControlled, onChange]
    );

    return [isControlled ? (value as T) : internalState, updateValue];
}
