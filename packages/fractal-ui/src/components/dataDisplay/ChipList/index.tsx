import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../../context';
import { Chip } from '../Chip';
import { IDEnabled } from '../../interactive/textInputs/AutoComplete/types';
import { ScrollWrapper } from './ScrollWrapper';
import { LayerProps } from '../..';

const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};

interface ChipListProps<T> extends LayerProps {
    data: Array<T>;
    getLabel: (item: T) => string;
    onItemPress: (item: T) => void;
}

export function ChipList<T extends IDEnabled>({ data, getLabel, onItemPress, ...others }: ChipListProps<T>): JSX.Element {
    const { spacings, colors, borderRadius } = useTheme();

    const renderItem = (item: T): JSX.Element => (
        <Chip
            key={item.id}
            animate={styleVariants.visible}
            exit={styleVariants.hidden}
            marginRight={spacings.s}
            marginBottom={spacings.s}
            onCrossButtonPress={() => onItemPress(item)}
            text={getLabel(item)}
        />
    );

    return (
        <ScrollWrapper
            padding={spacings.s}
            marginTop={spacings.s}
            marginBottom={spacings.s}
            borderRadius={borderRadius.s}
            backgroundColor={colors.background}
            {...others}
        >
            <AnimatePresence>{data.map(renderItem)}</AnimatePresence>
        </ScrollWrapper>
    );
}
