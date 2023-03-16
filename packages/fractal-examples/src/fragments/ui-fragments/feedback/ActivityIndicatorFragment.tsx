import React from 'react';
import { useTheme, ActivityIndicator, Box, Text } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function ActivityIndicatorFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    const width = 25;
    const height = 25;

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Activity Indicator Fragment
            </Text>
            <Box alignContent='center' flexDirection='row' marginTop={spacings.s} marginBottom={spacings.xl}>
                <ActivityIndicator width={width} height={height} color={colors.mainInteractiveColor} marginRight={spacings.m} />
                <ActivityIndicator width={width} height={height} color={colors.alternativeInteractiveColor} marginRight={spacings.m} />
                <ActivityIndicator width={width} height={height} color={colors.successInteractiveColor} marginRight={spacings.m} />
                <ActivityIndicator width={width} height={height} color={colors.warningInteractiveColor} marginRight={spacings.m} />
                <ActivityIndicator width={width} height={height} color={colors.dangerInteractiveColor} marginRight={spacings.m} />
            </Box>
        </>
    );
}
