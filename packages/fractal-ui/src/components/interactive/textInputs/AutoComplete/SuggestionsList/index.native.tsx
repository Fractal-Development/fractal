import React from 'react';

import { useTheme } from '../../../../../context';
import { VirtualList, Layer } from '../../../../layout';
import { SuggestionItem, SUGGESTION_ITEM_HEIGHT } from '../SuggestionItem';
import { IDEnabled, SuggestionsListProps } from '../types';

export function SuggestionsList<T extends IDEnabled>({
    filteredData,
    getLabel,
    onItemPress,
    multiple
}: SuggestionsListProps<T>): JSX.Element | null {
    const { spacings } = useTheme();

    const renderItem = ({ item, index }: { item: T; index: number }) => {
        const label = getLabel(item);

        const handleItemPress = () => {
            onItemPress(item);
        };

        return (
            <SuggestionItem
                key={`${item.id}`}
                label={label}
                itemData={item}
                isMultiple={multiple}
                onPress={handleItemPress}
                addSeparator={index !== filteredData.length - 1}
            />
        );
    };

    return (
        <Layer padding={spacings.m} flex={1}>
            {filteredData.length > 0 && (
                <VirtualList data={filteredData} estimatedItemSize={SUGGESTION_ITEM_HEIGHT} renderItem={renderItem} />
            )}
        </Layer>
    );
}
