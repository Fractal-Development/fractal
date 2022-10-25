import React, { createContext, Dispatch, SetStateAction, useState, useEffect, useCallback, ReactElement, useMemo } from 'react';

export type SelectedOptionsType = unknown[];

export type SelectedOptionsContextType = [SelectedOptionsType, Dispatch<SetStateAction<SelectedOptionsType>>];

export const SelectedOptionsContext = createContext<SelectedOptionsContextType>([[], () => {}]);

interface SelectedOptionsProviderProps {
    children: ReactElement;
    controllableSelectedOptions?: unknown[];
    onSelect: (value: unknown | unknown[]) => void;
    multiple?: boolean;
}

export function SelectedOptionsProvider({
    children,
    controllableSelectedOptions,
    onSelect,
    multiple
}: SelectedOptionsProviderProps): JSX.Element {
    const [selectedOptions, setSelectedOptions] = useState<unknown[]>(controllableSelectedOptions ?? []);

    const isControlled = controllableSelectedOptions !== undefined;

    const handleSelect = useCallback(
        (selectedOptions: unknown[]) => {
            if (multiple) {
                onSelect(selectedOptions);
            } else {
                onSelect(selectedOptions[0]);
            }
        },
        [multiple, onSelect]
    );

    const updateValue = useCallback(
        (nextValue: unknown[]) => {
            if (!isControlled) {
                setSelectedOptions(nextValue);
            }
            handleSelect(nextValue);
        },
        [handleSelect, isControlled]
    );

    useEffect(() => {
        if (controllableSelectedOptions) {
            setSelectedOptions(controllableSelectedOptions);
        }
    }, [controllableSelectedOptions]);

    const value: SelectedOptionsContextType = useMemo(() => [selectedOptions, updateValue], [selectedOptions, updateValue]);

    return <SelectedOptionsContext.Provider value={value}>{children}</SelectedOptionsContext.Provider>;
}
