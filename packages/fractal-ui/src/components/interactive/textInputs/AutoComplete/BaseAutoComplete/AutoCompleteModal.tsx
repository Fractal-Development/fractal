import React, { useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { Button } from '../../../buttons';
import { PaddingLayer, Box } from '../../../../layout';
import { MiddleCellModal } from '../../../../overlays/modals';
import { SearchBar } from '../../SearchBar';
import { SuggestionsList } from '../SuggestionsList';
import { AutoCompleteModalProps, IDEnabled } from '../types';

export function AutoCompleteModal<T extends IDEnabled>({
    visible,
    hideModal,
    doneText = 'Done',
    filteredData,
    getLabel,
    onItemPress,
    multiple,
    value,
    onChangeText,
    onSearch,
    ...searchBarProps
}: AutoCompleteModalProps<T>): JSX.Element {
    const searchInputRef = useRef<TextInput>();

    useEffect(() => {
        if (searchInputRef.current && visible) {
            searchInputRef.current.focus();
        }
    }, [visible]);

    return (
        <MiddleCellModal visible={visible} onDismiss={hideModal}>
            <Box flex={1} padding={0}>
                <PaddingLayer>
                    <SearchBar
                        inputRef={searchInputRef}
                        value={value}
                        onSearch={onSearch}
                        onChangeText={onChangeText}
                        {...searchBarProps}
                    />
                </PaddingLayer>
                <SuggestionsList multiple={multiple} filteredData={filteredData} getLabel={getLabel} onItemPress={onItemPress} />
                <PaddingLayer>
                    <Button variant={'main'} text={doneText} onPress={hideModal} />
                </PaddingLayer>
            </Box>
        </MiddleCellModal>
    );
}
