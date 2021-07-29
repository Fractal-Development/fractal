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
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Icons Fragment
            </Text>
            <Box flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-around'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <AppleIcon height={24} width={24} fill={colors.black} />
                <BugIcon height={24} width={24} fill={colors.black} />
                <CheckIcon height={24} width={24} fill={colors.black} />
                <ChevronDownIcon height={24} width={24} fill={colors.black} />
                <CloseIcon height={24} width={24} fill={colors.black} />
                <FacebookIcon height={24} width={24} fill={colors.black} />
                <FileIcon height={24} width={24} fill={colors.black} />
                <GoogleIcon height={24} width={24} fill={colors.black} />
                <LoadIcon height={24} width={24} fill={colors.black} />
                <SearchIcon height={24} width={24} fill={colors.black} />
                <ThreeDotsHorizontalIcon height={24} width={24} fill={colors.black} />
            </Box>
        </>
    );
}
