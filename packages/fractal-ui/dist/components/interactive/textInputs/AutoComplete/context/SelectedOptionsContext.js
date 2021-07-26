import React, { createContext, useState, useEffect, useCallback } from 'react';
const defaultValue = [];
export const SelectedOptionsContext = createContext(defaultValue);
export function SelectedOptionsProvider({ children, controllableSelectedOptions, onSelect, multiple }) {
    const [selectedOptions, setSelectedOptions] = useState(controllableSelectedOptions !== null && controllableSelectedOptions !== void 0 ? controllableSelectedOptions : []);
    const isControlled = controllableSelectedOptions !== undefined;
    const handleSelect = useCallback((selectedOptions) => {
        if (multiple) {
            onSelect(selectedOptions);
        }
        else {
            onSelect(selectedOptions[0]);
        }
    }, [multiple, onSelect]);
    const updateValue = useCallback((nextValue) => {
        if (!isControlled) {
            setSelectedOptions(nextValue);
        }
        handleSelect(nextValue);
    }, [handleSelect, isControlled]);
    useEffect(() => {
        if (controllableSelectedOptions) {
            setSelectedOptions(controllableSelectedOptions);
        }
    }, [controllableSelectedOptions]);
    return React.createElement(SelectedOptionsContext.Provider, { value: [selectedOptions, updateValue] }, children);
}
//# sourceMappingURL=SelectedOptionsContext.js.map