import React from 'react';
import {
    useTheme,
    Box,
    Layer,
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
            <Box flexDirection={'row'} flexWrap={'wrap'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <AppleIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <BugIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <CheckIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <ChevronDownIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <CloseIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <FacebookIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <FileIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <GoogleIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <LoadIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <SearchIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs} marginBottom={spacings.xs}>
                    <ThreeDotsHorizontalIcon height={24} width={24} fill={colors.black} />
                </Layer>
            </Box>
        </>
    );
}
