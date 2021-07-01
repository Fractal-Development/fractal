import React, { useEffect } from 'react';
import { useTheme } from '../../../../context';
import { Box } from '../../../containers/Box';
import { Popover } from '../../../Popover';
import { SearchBar } from '../../SearchBar';
import { SuggestionsList } from '../SuggestionsList';
import { BaseAutoCompleteProps, IDEnabled } from '../types';

export function BaseAutoComplete<T extends IDEnabled>({
    suggestionsVisible,
    hideSuggestions,
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple,
    value,
    onChangeText,
    onSearch,
    ...searchBarProps
}: BaseAutoCompleteProps<T>): JSX.Element {
    const { spacings } = useTheme();

    useEffect(() => {
        if (filteredData.length == 0) {
            hideSuggestions();
        }
    }, [filteredData.length, hideSuggestions]);

    return (
        <Popover
            placement={'bottom'}
            active={suggestionsVisible}
            onRequestClose={hideSuggestions}
            popoverChildren={(anchorWidth: number) => (
                <Box
                    width={anchorWidth}
                    marginTop={spacings.s}
                    padding={0}
                    paddingTop={spacings.xs}
                    paddingBottom={spacings.xs}
                    maxHeight={240}
                    overflow={'scroll'}
                >
                    <SuggestionsList
                        multiple={multiple}
                        filteredData={filteredData}
                        getLabel={getLabel}
                        onItemPress={onItemPress}
                        selectedIds={selectedIds}
                    />
                </Box>
            )}
        >
            {(ref) => (
                <SearchBar
                    ref={ref}
                    value={value}
                    ariaLabel={'Autocomplete'}
                    onSearch={onSearch}
                    onChangeText={onChangeText}
                    {...searchBarProps}
                />
            )}
        </Popover>
    );
}
