import React from 'react';
import { TouchableOpacity } from '../../buttons';
import { SimpleRow } from '../../../layout/tables';
import { CheckMarkRow } from '../../../layout/tables/rows/CheckMarkRow';
export function SuggestionItem({ label, isSelected, isMultiple, addSeparator, onPress }) {
    return (React.createElement(TouchableOpacity, { width: '100%', onPress: onPress }, isMultiple ? (React.createElement(CheckMarkRow, { title: label, isSelected: isSelected, addSeparator: addSeparator, minHeight: 46 })) : (React.createElement(SimpleRow, { title: label, addSeparator: addSeparator }))));
}
//# sourceMappingURL=SuggestionItem.js.map