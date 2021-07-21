import React from 'react';
import {
    useTheme,
    Box,
    Text,
    AppleIcon,
    BugIcon,
    CheckIcon,
    ChevronDownIcon,
    CloseIcon,
    FacebookIcon,
    FileIcon,
    GoogleIcon,
    LoadIcon,
    SearchIcon,
    ThreeDotsHorizontalIcon
} from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';

export function IconsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Icons Fragment
            </Text>
            <Box flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <AppleIcon height={24} width={24} />
                <BugIcon height={24} width={24} />
                <CheckIcon height={24} width={24} />
                <ChevronDownIcon height={24} width={24} />
                <CloseIcon height={24} width={24} />
                <FacebookIcon height={24} width={24} />
                <FileIcon height={24} width={24} />
                <GoogleIcon height={24} width={24} />
                <LoadIcon height={24} width={24} />
                <SearchIcon height={24} width={24} />
                <ThreeDotsHorizontalIcon height={24} width={24} />
            </Box>
        </>
    );
}
