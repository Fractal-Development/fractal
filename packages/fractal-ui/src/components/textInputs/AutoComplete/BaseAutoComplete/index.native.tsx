import React, { useState, useCallback } from 'react';
import { Layer } from '../../../containers/Layer';
import { TextFieldButton } from '../../TextFieldButton';
import { BaseAutoCompleteProps, IDEnabled } from '../types';
import { AutoCompleteModal } from './AutoCompleteModal';

export function BaseAutoComplete<T extends IDEnabled>({
    doneText = 'Done',
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple,
    value,
    placeholder,
    onChangeText,
    onSearch,
    ...searchBarProps
}: BaseAutoCompleteProps<T>): JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);

    const hideModal = useCallback(() => setModalVisible(false), []);
    const showModal = useCallback(() => setModalVisible(true), []);

    const handleItemPress = (option: T, isSelected: boolean) => {
        onItemPress(option, isSelected, true);
    };

    return (
        <Layer>
            <TextFieldButton onPress={showModal} value={value} placeholder={placeholder} />
            <AutoCompleteModal
                placeholder={placeholder}
                visible={modalVisible}
                hideModal={hideModal}
                doneText={doneText}
                filteredData={filteredData}
                getLabel={getLabel}
                onItemPress={handleItemPress}
                selectedIds={selectedIds}
                multiple={multiple}
                value={value}
                onChangeText={onChangeText}
                onSearch={onSearch}
                {...searchBarProps}
            />
        </Layer>
    );
}
