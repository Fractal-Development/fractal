import React from 'react';

import { useTheme } from '../../../../../context';
import { Layer } from '../../../../layout';
import { SuggestionItem } from '../SuggestionItem';
import { IDEnabled, SuggestionsListProps } from '../types';

export function SuggestionsList<T extends IDEnabled>({
    filteredData,
    getLabel,
    onItemPress,
    multiple
}: SuggestionsListProps<T>): JSX.Element | null {
    const { spacings } = useTheme();
    return (
        <Layer padding={spacings.m}>
            {filteredData.map((item: T, index: number) => {
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
            })}
        </Layer>
    );
}
