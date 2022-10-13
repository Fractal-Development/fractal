import React, { useState, useCallback } from 'react';

import { Layer } from '../../../../layout/Layer';
import { TextFieldButton } from '../../TextFieldButton';
import { BaseAutoCompleteProps, IDEnabled } from '../types';
import { AutoCompleteModal } from './AutoCompleteModal';

export function BaseAutoComplete<T extends IDEnabled>({
    doneText = 'Done',
    filteredData,
    getLabel,
    onItemPress,
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

    const handleItemPress = (option: T) => {
        onItemPress(option, true);
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
                multiple={multiple}
                value={value}
                onChangeText={onChangeText}
                onSearch={onSearch}
                {...searchBarProps}
            />
        </Layer>
    );
}
