import React, { ReactElement, useCallback } from 'react';

import { useTheme } from '../../../context';
import { Pressable } from '../../interactive/buttons/Pressable';
import { Layer } from '../../layout';
import { Text } from '../../text';

export interface ColorTabProps {
    tabColor: string;
    text: string;
}

interface InternalColorTabProps extends ColorTabProps {
    active: boolean;
    index: number;
    onPress: (index: number) => void;
}

const variants = {
    active: { opacity: 1, scale: 1 },
    inactive: { opacity: 0.6, scale: 0.8 }
};

export function ColorTab({ tabColor, text, active, onPress, index }: InternalColorTabProps): ReactElement {
    const { borderRadius, colors, spacings, sizes } = useTheme();
    const handlePress = useCallback(() => {
        onPress(index);
    }, [index, onPress]);

    return (
        <Pressable
            onPress={handlePress}
            backgroundColor={colors.foreground}
            height={sizes.colorTabListItemHeight}
            currentVariant={active ? 'active' : 'inactive'}
            variants={variants}
            borderRadius={borderRadius.m}
            borderBottomRightRadius={active ? 0 : borderRadius.m}
            borderBottomLeftRadius={active ? 0 : borderRadius.m}
            alignItems='center'
            justifyContent='flex-end'
            overflow='hidden'
            padding={0}
        >
            <Text marginRight={spacings.m} marginLeft={spacings.m} variant='button' color={colors.text} marginBottom={spacings.xs}>
                {text}
            </Text>
            <Layer width='100%' height={10} backgroundColor={tabColor} />
        </Pressable>
    );
}
