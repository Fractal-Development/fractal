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
} from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from './accessibility/getTitleTextAccessibilityProps';

export function IconsFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Icons Fragment
            </Text>
            <Box flexDirection='row' flexWrap='wrap' justifyContent='space-around' marginTop={spacings.s} marginBottom={spacings.xl}>
                <AppleIcon height={24} width={24} fill={colors.text} />
                <BugIcon height={24} width={24} fill={colors.text} />
                <CheckIcon height={24} width={24} fill={colors.text} />
                <ChevronDownIcon height={24} width={24} fill={colors.text} />
                <CloseIcon height={24} width={24} fill={colors.text} />
                <FacebookIcon height={24} width={24} fill={colors.text} />
                <FileIcon height={24} width={24} fill={colors.text} />
                <GoogleIcon height={24} width={24} fill={colors.text} />
                <LoadIcon height={24} width={24} fill={colors.text} />
                <SearchIcon height={24} width={24} fill={colors.text} />
                <ThreeDotsHorizontalIcon height={24} width={24} fill={colors.text} />
            </Box>
        </>
    );
}
