import React, { useState } from 'react';
import { useTheme, Box, MultiSelectInput, Text } from '@bma98/fractal-ui';
export function TagsInputField() {
    const { spacings } = useTheme();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([
        { id: '0', value: 'enormout' },
        { id: '1', value: 'fun' },
        { id: '2', value: 'fast' },
        { id: '3', value: 'few' }
    ]);
    const [selectedTags, setSelectedTags] = useState([]);
    const handleSubmitEditing = () => {
        addNewTag(tag);
    };
    const addNewTag = (tag) => {
        const newTag = { id: `${tags.length}`, value: tag };
        setTags((currentTags) => [...currentTags, newTag]);
        addSelectedTag(newTag);
        setTag('');
    };
    const addSelectedTag = (tag) => {
        setSelectedTags((currentTags) => [...currentTags, tag]);
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
        React.createElement(Text, { variant: 'title' }, "Multi Select Input Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl, maxHeight: 320 },
            React.createElement(MultiSelectInput, { placeholder: 'Escribe y da enter', options: tags, getOptionLabel: (tag) => tag.value, onSelect: handleSelect, onDeletePress: removeTag, onClearPress: clearTags, clearButtonText: 'Limpiar', inputValue: tag, controllableSelectedOptions: selectedTags, onChangeText: setTag, onSubmitEditing: handleSubmitEditing }))));
}
//# sourceMappingURL=TagsInputField.js.map