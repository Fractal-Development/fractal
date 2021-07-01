import React from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { SegmentedControlTabProps } from './types';
import { BaseSegmentedControlTab } from './BaseSegmentedControlTab';

export const SegmentedControlTab = ({
    onSelect,
    value,
    selected,
    tintColor,
    hideDivider,
    textStyle = {},
    activeTextStyle = {}
}: SegmentedControlTabProps): JSX.Element => {
    const { colors } = useTheme();
    const { color: textColor, fontSize, fontFamily, fontWeight, fontStyle } = textStyle;

    const {
        color: activeColor,
        fontSize: activeFontSize,
        fontFamily: activeFontFamily,
        fontWeight: activeFontWeight,
        fontStyle: activeFontStyle
    } = activeTextStyle;

    const getColor = () => {
        if (textColor) {
            return textColor;
        }
        if (tintColor) {
            return 'white';
        }
        return colors.text;
    };

    const color = getColor();

    return (
        <BaseSegmentedControlTab
            value={value}
            selected={selected}
            hideDivider={hideDivider}
            onSelect={onSelect}
            tintColor={tintColor}
            fontFamily={selected ? activeFontFamily : fontFamily}
            fontSize={selected ? activeFontSize : fontSize}
            color={selected ? activeColor || color : color}
            fontWeight={selected ? activeFontWeight || '700' : fontWeight}
            fontStyle={selected ? activeFontStyle : fontStyle}
        />
    );
};
