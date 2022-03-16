import React, { useCallback, useEffect } from 'react';
import { useTheme } from '../../../../../context';
import { Box } from '../../../../layout/Box';
import { Popover } from '../../../../overlays/Popover';
import { SearchBar } from '../../SearchBar';
import { SuggestionsList } from '../SuggestionsList';
import { BaseAutoCompleteProps, IDEnabled } from '../types';

export function BaseAutoComplete<T extends IDEnabled>({
    suggestionsVisible,
    hideSuggestions,
    filteredData,
    getLabel,
    onItemPress,
    multiple,
    value,
    onChangeText,
    onSearch,
    ...searchBarProps
}: BaseAutoCompleteProps<T>): JSX.Element {
    const { spacings } = useTheme();

    useEffect(() => {
        if (filteredData.length === 0) {
            hideSuggestions();
        }
    }, [filteredData.length, hideSuggestions]);

    const popoverChildren = useCallback(
        (anchorWidth: number) => (
            <Box
                width={anchorWidth}
                marginTop={spacings.s}
                padding={0}
                paddingTop={spacings.xs}
                paddingBottom={spacings.xs}
                maxHeight={240}
                overflow='scroll'
            >
                <SuggestionsList multiple={multiple} filteredData={filteredData} getLabel={getLabel} onItemPress={onItemPress} />
            </Box>
        ),
        [spacings, filteredData, getLabel, onItemPress, multiple]
    );

    return (
        <Popover placement='bottom' active={suggestionsVisible} onRequestClose={hideSuggestions} popoverChildren={popoverChildren}>
            {(ref) => (
                <SearchBar
                    ref={ref}
                    value={value}
                    ariaLabel='Autocomplete'
                    onSearch={onSearch}
                    onChangeText={onChangeText}
                    {...searchBarProps}
                />
            )}
        </Popover>
    );
}
