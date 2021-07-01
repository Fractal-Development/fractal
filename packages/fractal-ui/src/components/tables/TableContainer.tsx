import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { TableContainerProps, TextColorVariant } from './types';
import { getTableContainerAccessibilityProps } from './accessibility/getTableContainerAccessibilityProps';

const TableContainer = forwardRef(
    (
        {
            title,
            children,
            titleTextVariant = 'title',
            titleColorVariant = 'text',
            label,
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
                <HorizontalLayer marginBottom={spacings.m} justifyContent='space-between' alignItems={'center'}>
                    <Text variant={titleTextVariant} color={titleColor}>
                        {title}
                    </Text>
                    <Text variant={'label'} color={labelColor}>
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
