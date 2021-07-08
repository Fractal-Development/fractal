import React from 'react';
import { useTheme, Box, Text, GridList } from '../../../src';

export function GridListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Grid List Example</Text>
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
