import React, { forwardRef } from 'react';

import { useTheme } from '../../../context';
import { CrossButton } from '../../interactive/buttons/CrossButton';
import { Box } from '../../layout';
import { Text } from '../../text';
import { getChipAccessibilityProps } from './accessibility/getChipAccessibilityProps';
import { ChipProps } from './types';

const Chip = forwardRef(({ text, children, onCrossButtonPress, ...others }: ChipProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();

    return (
        <Box
            ref={ref}
            maxWidth={200}
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            padding={spacings.xs}
            {...getChipAccessibilityProps(text)}
            {...others}
        >
            {text != null ? (
                <Text variant='normal' overflow='hidden' numberOfLines={1}>
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
