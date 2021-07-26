import React from 'react';
import { SuggestionItem } from '../SuggestionItem';
import { Layer } from '../../../../layout';
import { useTheme } from '../../../../../context';
export function SuggestionsList({ filteredData, getLabel, onItemPress, multiple }) {
    const { spacings } = useTheme();
    return (React.createElement(Layer, { padding: spacings.m }, filteredData.map((item, index) => {
        const label = getLabel(item);
        const handleItemPress = () => {
            onItemPress(item);
        };
        return (React.createElement(SuggestionItem, { key: `${item.id}`, label: label, itemData: item, isMultiple: multiple, onPress: handleItemPress, addSeparator: index !== filteredData.length - 1 }));
    })));
}
//# sourceMappingURL=index.js.map