import React, { ReactElement, useCallback } from 'react';
import { useTheme } from '../../../context';
import { Pressable } from '../../interactive';
import { Text } from '../../text';
import { Layer } from '../../layout';

export interface ColorTabProps {
    tabColor: string;
    text: string;
}

interface InternalColorTabProps extends ColorTabProps {
    active: boolean;
    index: number;
    onPress: (index: number) => void;
}

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
            animate={{ opacity: active ? 1 : 0.6, scale: active ? 1 : 0.8 }}
            borderRadius={borderRadius.m}
            borderBottomRightRadius={active ? 0 : borderRadius.m}
            borderBottomLeftRadius={active ? 0 : borderRadius.m}
            alignItems={'center'}
            justifyContent={'flex-end'}
            overflow={'hidden'}
            padding={0}
        >
            <Text marginRight={spacings.m} marginLeft={spacings.m} variant='button' color={colors.text} marginBottom={spacings.xs}>
                {text}
            </Text>
            <Layer width={'100%'} height={10} backgroundColor={tabColor} />
        </Pressable>
    );
}
