import React, { useState, useEffect } from 'react';
import { SuggestionItem, SUGGESTION_ITEM_HEIGHT } from '../SuggestionItem';
import { IDEnabled, SuggestionsListProps } from '../types';
import { DataProvider, VerticalFlatList, Layer } from '../../../../layout';
import { useTheme } from '../../../../../context';
import { useSizeValue } from '@bma98/size-class';

const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});

export function SuggestionsList<T extends IDEnabled>({
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple
}: SuggestionsListProps<T>): JSX.Element | null {
    const { spacings } = useTheme();

    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(filteredData));
    const width = useSizeValue('width');

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(filteredData));
    }, [filteredData, width]);

    const renderItem = (_: string | number, item: T, index: number) => {
        const label = getLabel(item);
        const isSelected = selectedIds.indexOf(item.id) > -1;

        const handleItemPress = () => {
            onItemPress(item, isSelected);
        };

        return (
            <SuggestionItem
                key={`${item.id}`}
                label={label}
                isSelected={isSelected}
                isMultiple={multiple}
                onPress={handleItemPress}
                addSeparator={index !== filteredData.length - 1}
            />
        );
    };

    return (
        <Layer padding={spacings.m} flex={1}>
            {filteredData.length > 0 && (
                <VerticalFlatList
                    key={width}
                    rowHeight={SUGGESTION_ITEM_HEIGHT}
                    dataProvider={dataProviderState}
                    rowRenderer={renderItem}
                />
            )}
        </Layer>
    );
}
