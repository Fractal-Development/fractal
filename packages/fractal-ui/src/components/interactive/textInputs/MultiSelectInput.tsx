import React from 'react';
import { IDEnabled } from './AutoComplete/types';
import { AutoComplete } from './AutoComplete';
import { Button } from '../buttons';
import { Layer, LayerProps } from '../../layout';
import { ChipList } from '../../dataDisplay';

interface MultiSelectInputProps<T> extends Omit<LayerProps, 'children'> {
    options: Array<T>;
    getOptionLabel: (option: T) => string;
    onSelect: (values: Array<T>) => void;
    onDeletePress: (item: T) => void;
    onClearPress?: () => void;
    onChangeText: (text: string) => void;
    onSubmitEditing: () => void;
    clearButtonText?: string;
    inputValue?: string;
    controllableSelectedOptions: Array<T>;
    placeholder?: string;
    enableClearButton?: boolean;
}

export function MultiSelectInput<T extends IDEnabled>({
    options,
    getOptionLabel,
    clearButtonText = 'Limpiar',
    onSelect,
    onClearPress,
    onDeletePress,
    inputValue,
    controllableSelectedOptions,
    onChangeText,
    placeholder,
    onSubmitEditing,
    enableClearButton = false,
    ...layerProps
}: MultiSelectInputProps<T>): JSX.Element {
    return (
        <Layer {...layerProps}>
            <AutoComplete
                value={inputValue}
                multiple
                options={options}
                getOptionLabel={getOptionLabel}
                placeholder={placeholder}
                onSelect={onSelect}
                controllableSelectedOptions={controllableSelectedOptions}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
            <ChipList data={controllableSelectedOptions} getLabel={getOptionLabel} onItemPress={onDeletePress} />
            { enableClearButton ? <Button variant={'warning'} onPress={onClearPress} text={clearButtonText} /> : null } 
        </Layer>
    );
}
