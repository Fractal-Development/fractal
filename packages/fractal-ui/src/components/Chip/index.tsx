import React, { forwardRef } from 'react';
import { ChipProps } from './types';
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers/Box';
import { Text } from '../text';
import { CrossButton } from '../buttons';
import { getChipAccessibilityProps } from './accessibility/getChipAccessibilityProps';

const Chip = forwardRef(({ text, children, onCrossButtonPress, ...others }: ChipProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();

    return (
        <Box
            ref={ref}
            maxWidth={200}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={spacings.xs}
            {...getChipAccessibilityProps(text)}
            {...others}
        >
            {text != null ? (
                <Text variant='normal' overflow={'hidden'} numberOfLines={1}>
                    {text}
                </Text>
            ) : null}
            {children}
            <CrossButton marginLeft={spacings.xs} onPress={onCrossButtonPress} />
        </Box>
    );
});

Chip.displayName = 'Chip';

export { Chip };
