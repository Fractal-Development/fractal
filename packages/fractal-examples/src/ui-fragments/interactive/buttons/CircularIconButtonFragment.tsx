import React from 'react';
import { useTheme, Box, CircularIconButton, Text, LoadIcon, ChevronDownIcon, ThreeDotsHorizontalIcon, SearchIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function CircularIconButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Circular Icon Button Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <CircularIconButton variant="main" marginBottom={spacings.s}>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="main" marginBottom={spacings.s} disabled>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="main" marginBottom={spacings.s} reduceColor>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="main" marginBottom={spacings.s} reduceColor disabled>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="alternative" marginBottom={spacings.s}>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="alternative" marginBottom={spacings.s} disabled>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="alternative" marginBottom={spacings.s} reduceColor>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="alternative" marginBottom={spacings.s} reduceColor disabled>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="danger" marginBottom={spacings.s}>
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="danger" marginBottom={spacings.s} disabled>
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="danger" marginBottom={spacings.s} reduceColor>
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="danger" marginBottom={spacings.s} reduceColor disabled>
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="warning" marginBottom={spacings.s}>
                    {(color) => <ThreeDotsHorizontalIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="warning" marginBottom={spacings.s} disabled>
                    {(color) => <ThreeDotsHorizontalIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="warning" marginBottom={spacings.s} reduceColor>
                    {(color) => <ThreeDotsHorizontalIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="warning" marginBottom={spacings.s} reduceColor disabled>
                    {(color) => <ThreeDotsHorizontalIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="success" marginBottom={spacings.s}>
                    {(color) => <SearchIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="success" marginBottom={spacings.s} disabled>
                    {(color) => <SearchIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="success" marginBottom={spacings.s} reduceColor>
                    {(color) => <SearchIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
                <CircularIconButton variant="success" marginBottom={spacings.s} reduceColor disabled>
                    {(color) => <SearchIcon height={24} width={24} fill={color} />}
                </CircularIconButton>
            </Box>
        </>
    );
}
