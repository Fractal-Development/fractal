import React, { forwardRef } from 'react';

import { useTheme } from '../../../context';
import { Text } from '../../text';
import { Box } from '../Box';
import { HorizontalLayer } from '../HorizontalLayer';
import { getTableContainerAccessibilityProps } from './accessibility/getTableContainerAccessibilityProps';
import { TableContainerProps, TextColorVariant } from './types';

const TableContainer = forwardRef(
    (
        {
            title,
            children,
            titleTextVariant = 'title',
            titleColorVariant = 'text',
            label,
            labelTextVariant = 'label',
            labelColorVariant = 'text',
            ...others
        }: TableContainerProps,
        ref: any
    ): JSX.Element => {
        const { colors, spacings } = useTheme();
        const getColorName = (colorVariant: TextColorVariant): string =>
            colorVariant !== 'text' ? `${colorVariant}InteractiveColor` : colorVariant;

        const titleColorName = getColorName(titleColorVariant);
        const titleColor = colors[titleColorName];

        const labelColorName = getColorName(labelColorVariant);
        const labelColor = colors[labelColorName];

        return (
            <Box ref={ref} {...getTableContainerAccessibilityProps()} {...others}>
                <HorizontalLayer marginBottom={spacings.m} justifyContent='space-between' alignItems='center'>
                    <Text variant={titleTextVariant} color={titleColor} flex={1}>
                        {title}
                    </Text>
                    <Text variant={labelTextVariant} color={labelColor}>
                        {label}
                    </Text>
                </HorizontalLayer>
                {children}
            </Box>
        );
    }
);

TableContainer.displayName = 'TableContainer';

export { TableContainer };
