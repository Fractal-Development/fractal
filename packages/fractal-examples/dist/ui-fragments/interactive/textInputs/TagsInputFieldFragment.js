import React, { useState } from 'react';
import { useTheme, Box, MultiSelectInput, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
import { getMultiSelectInputAccessibilityProps } from './accessibility/getMultiSelectInputAccessibilityProps';
export function TagsInputFieldFragment() {
    const { spacings } = useTheme();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([
        { id: '0', value: 'enormout' },
        { id: '1', value: 'fun' },
        { id: '2', value: 'fast' },
        { id: '3', value: 'few' }
    ]);
    const [selectedTags, setSelectedTags] = useState([]);
    const addSelectedTag = (tag) => {
        setSelectedTags((currentTags) => [...currentTags, tag]);
    };
    const addNewTag = (tag) => {
        const newTag = { id: `${tags.length}`, value: tag };
        setTags((currentTags) => [...currentTags, newTag]);
        addSelectedTag(newTag);
        setTag('');
    };
    const handleSubmitEditing = () => {
        if (tag !== '') {
            addNewTag(tag);
        }
    };
    const clearTags = () => {
        setSelectedTags([]);
    };
    const handleSelect = (values) => {
        setSelectedTags(values);
    };
    const removeTag = (tag) => {
        setSelectedTags((currentTags) => currentTags.filter((item) => item.id !== tag.id));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Multi Select Input Fragment"),
        React.createElement(Box, Object.assign({ marginTop: spacings.s, marginBottom: spacings.xl }, getMultiSelectInputAccessibilityProps()),
            React.createElement(MultiSelectInput, { height: 240, enableClearButton: true, placeholder: 'Escribe y da enter', clearButtonText: 'Limpiar', options: tags, inputValue: tag, controllableSelectedOptions: selectedTags, getOptionLabel: (tag) => tag.value, onSelect: handleSelect, onDeletePress: removeTag, onClearPress: clearTags, onChangeText: setTag, onSubmitEditing: handleSubmitEditing }))));
}
//# sourceMappingURL=TagsInputFieldFragment.js.map