import React from 'react';
import { SuggestionItem } from './SuggestionItem';
import { Layer } from '../../containers';
import { useTheme } from '../../../context';
export function SuggestionsList({ filteredData, getLabel, onItemPress, selectedIds, multiple }) {
    const { spacings } = useTheme();
    return (React.createElement(Layer, { padding: spacings.m }, filteredData.map((item, index) => {
        const label = getLabel(item);
        const isSelected = selectedIds.indexOf(item.id) > -1;
        const handleItemPress = () => {
            onItemPress(item, isSelected);
        };
        return (React.createElement(SuggestionItem, { key: `${item.id}`, label: label, isSelected: isSelected, isMultiple: multiple, onPress: handleItemPress, addSeparator: index !== filteredData.length - 1 }));
    })));
}
//# sourceMappingURL=SuggestionsList.js.map