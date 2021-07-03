import React from 'react';
import { useTheme, Box, Text, Grid, GridColumn, GridRow } from '@bma98/fractal-ui';

export function GridFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Grid Example</Text>
            <Box height={300} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Grid>
                    <GridColumn backgroundColor={colors.dangerInteractiveColor300} />
                    <GridColumn>
                        <GridRow backgroundColor={colors.warningInteractiveColor300} />
                        <GridRow backgroundColor={colors.mainInteractiveColor300} />
                    </GridColumn>
                </Grid>
            </Box>
        </>
    );
}
