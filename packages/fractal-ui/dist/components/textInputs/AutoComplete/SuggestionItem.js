import React from 'react';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { SimpleRow } from '../../tables/rows/SimpleRow';
import { CheckMarkRow } from '../../tables/rows/CheckMarkRow';
export function SuggestionItem({ label, isSelected, isMultiple, addSeparator, onPress }) {
    return (React.createElement(TouchableOpacity, { width: '100%', onPress: onPress }, isMultiple ? (React.createElement(CheckMarkRow, { title: label, isSelected: isSelected, addSeparator: addSeparator })) : (React.createElement(SimpleRow, { title: label, addSeparator: addSeparator }))));
}
//# sourceMappingURL=SuggestionItem.js.map