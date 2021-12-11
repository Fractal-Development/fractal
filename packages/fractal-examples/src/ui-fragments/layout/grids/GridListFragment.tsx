import React from 'react';
import { useTheme, Box, Text, GridList } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function GridListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Grid List Fragment
            </Text>
            <GridList
                data={['One', 'Two', 'Three', 'Four']}
                numColumns={2}
                backgroundColor={colors.warningInteractiveColor}
                marginTop={spacings.s}
                marginBottom={spacings.xl}
                renderItem={() => <Box margin={4} height={60} minWidth={30} />}
            />
        </>
    );
}
