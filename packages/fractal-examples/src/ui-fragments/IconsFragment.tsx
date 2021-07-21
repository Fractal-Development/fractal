import React from 'react';
import { useTheme, Box, Text, AppleIcon, BugIcon, CheckIcon, ChevronDownIcon, CloseIcon, FacebookIcon, FileIcon, GoogleIcon, LoadIcon, SearchIcon, ThreeDotsHorizontalIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';

export function IconsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Icons Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <AppleIcon />
                <BugIcon />
                <CheckIcon />
                <ChevronDownIcon />
                <CloseIcon />
                <FacebookIcon />
                <FileIcon />
                <GoogleIcon />
                <LoadIcon />
                <SearchIcon />
                <ThreeDotsHorizontalIcon />
            </Box>
        </>
    );
}
