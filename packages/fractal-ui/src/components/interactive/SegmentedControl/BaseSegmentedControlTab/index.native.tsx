import React from 'react';
import { Layer } from '../../../layout';
import { TouchableOpacity } from '../../buttons';
import { Text } from '../../../text';
import { BaseSegmentedControlTabProps } from '../types';
import { useTheme } from '../../../../context';

export function BaseSegmentedControlTab({
    onSelect,
    value,
    fontFamily,
    fontSize,
    color,
    fontWeight,
    fontStyle
}: BaseSegmentedControlTabProps): JSX.Element {
    const { borderRadius } = useTheme();
    return (
        <TouchableOpacity onPress={onSelect} flex={1} borderRadius={borderRadius.xs}>
            <Layer flex={1} justifyContent='center' alignItems='center' margin={2} borderRadius={borderRadius.xs}>
                <Text
                    variant='normal'
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    color={color}
                    fontWeight={fontWeight}
                    fontStyle={fontStyle}
                >
                    {value}
                </Text>
            </Layer>
        </TouchableOpacity>
    );
}
