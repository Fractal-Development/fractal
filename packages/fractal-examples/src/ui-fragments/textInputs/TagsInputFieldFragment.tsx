import React, { useState } from 'react';
import { useTheme, Box, MultiSelectInput, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getMultiSelectInputAccessibilityProps } from './accessibility/getMultiSelectInputAccessibilityProps';

interface Tag {
    id: string;
    value: string;
}

export function TagsInputFieldFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState<Array<Tag>>([
        { id: '0', value: 'enormout' },
        { id: '1', value: 'fun' },
        { id: '2', value: 'fast' },
        { id: '3', value: 'few' }
    ]);
    const [selectedTags, setSelectedTags] = useState<Array<Tag>>([]);

    const handleSubmitEditing = () => {
        if (tag != '') {
            addNewTag(tag);
        }
    };

    const addNewTag = (tag: string) => {
        const newTag = { id: `${tags.length}`, value: tag };
        setTags((currentTags) => [...currentTags, newTag]);
        addSelectedTag(newTag);
        setTag('');
    };

    const addSelectedTag = (tag: Tag) => {
        setSelectedTags((currentTags) => [...currentTags, tag]);
    };

    const clearTags = () => {
        setSelectedTags([]);
    };

    const handleSelect = (values: Array<Tag>) => {
        setSelectedTags(values as Array<Tag>);
    };

    const removeTag = (tag: Tag) => {
        setSelectedTags((currentTags) => currentTags.filter((item) => item.id !== tag.id));
    };

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Multi Select Input Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} maxHeight={320} {...getMultiSelectInputAccessibilityProps()}>
                <MultiSelectInput
                    placeholder={'Escribe y da enter'}
                    options={tags}
                    getOptionLabel={(tag: Tag) => tag.value}
                    onSelect={handleSelect}
                    onDeletePress={removeTag}
                    onClearPress={clearTags}
                    clearButtonText='Limpiar'
                    inputValue={tag}
                    controllableSelectedOptions={selectedTags}
                    onChangeText={setTag}
                    onSubmitEditing={handleSubmitEditing}
                />
            </Box>
        </>
    );
}
