import React from 'react';
import { SuggestionItem } from './SuggestionItem';
import { IDEnabled, SuggestionsListProps } from './types';
import { Layer } from '../../containers';
import { useTheme } from '../../../context';

export function SuggestionsList<T extends IDEnabled>({
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple
}: SuggestionsListProps<T>): JSX.Element | null {
    const { spacings } = useTheme();
    return (
        <Layer padding={spacings.m}>
            {filteredData.map((item, index) => {
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
            })}
        </Layer>
    );
}
