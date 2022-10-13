import React from 'react';

import { ChipList } from '../../dataDisplay';
import { Layer, LayerProps } from '../../layout';
import { Button } from '../buttons';
import { AutoComplete } from './AutoComplete';
import { IDEnabled } from './AutoComplete/types';

interface MultiSelectInputProps<T> extends Omit<LayerProps, 'children'> {
    options: T[];
    getOptionLabel: (option: T) => string;
    onSelect: (values: T[]) => void;
    onDeletePress: (item: T) => void;
    onClearPress?: () => void;
    onChangeText: (text: string) => void;
    onSubmitEditing: () => void;
    clearButtonText?: string;
    inputValue?: string;
    controllableSelectedOptions: T[];
    placeholder?: string;
    enableClearButton?: boolean;
    chipListStyle?: Omit<LayerProps, 'children'>;
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
    chipListStyle,
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
            <ChipList
                zIndex={-1}
                data={controllableSelectedOptions}
                getLabel={getOptionLabel}
                onItemPress={onDeletePress}
                {...chipListStyle}
            />
            {enableClearButton ? <Button zIndex={-1} variant='warning' onPress={onClearPress} text={clearButtonText} /> : null}
        </Layer>
    );
}
