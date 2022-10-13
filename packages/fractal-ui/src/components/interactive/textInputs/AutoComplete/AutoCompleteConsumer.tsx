import React, { useState } from 'react';

import { useControllableState } from '../../../../hooks/useControllableState';
import { BaseAutoComplete } from './BaseAutoComplete';
import { AutoCompleteProps, IDEnabled } from './types';

export function AutoCompleteConsumer<T extends IDEnabled>({
    options,
    getOptionLabel,
    multiple,
    onChangeText,
    value,
    ...searchBarProps
}: Omit<AutoCompleteProps<T>, 'onSelect' | 'controllableSelectedOptions'>): JSX.Element {
    const [suggestionsVisible, setSuggestionsVisible] = useState(false);
    const [userInput, setUserInput] = useControllableState(value, '', onChangeText);
    const [filteredOptions, setFilteredOptions] = useState<T[]>(options);

    const onOptionPress = (option: T, keepInput?: boolean) => {
        if (!keepInput && multiple) {
            setUserInput('');
        }
        if (!multiple) {
            setUserInput(getOptionLabel(option));
        }
        setSuggestionsVisible(false);
    };

    const showSuggestions = () => setSuggestionsVisible(true);

    const hideSuggestions = () => setSuggestionsVisible(false);

    const handleChangeText = (query: string) => {
        const newFilteredOptions = options.filter((option) => {
            const candidate = getOptionLabel(option);
            const clearUserInput = query.trim();
            return candidate.toLowerCase().indexOf(clearUserInput.toLowerCase()) > -1;
        });
        setSuggestionsVisible(true);
        setFilteredOptions(newFilteredOptions);
        setUserInput(query);
    };

    return (
        <BaseAutoComplete
            value={userInput}
            onChangeText={handleChangeText}
            suggestionsVisible={suggestionsVisible}
            hideSuggestions={hideSuggestions}
            filteredData={filteredOptions}
            getLabel={getOptionLabel}
            onItemPress={onOptionPress}
            multiple={multiple}
            textFieldProps={{
                onFocus: showSuggestions
            }}
            {...searchBarProps}
        />
    );
}
