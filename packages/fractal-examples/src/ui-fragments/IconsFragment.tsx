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
            <Box flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Layer marginRight={spacings.xs}>
                    <AppleIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <BugIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <CheckIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <ChevronDownIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <CloseIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <FacebookIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <FileIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <GoogleIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <LoadIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <SearchIcon height={24} width={24} fill={colors.black} />
                </Layer>
                <Layer marginRight={spacings.xs}>
                    <ThreeDotsHorizontalIcon height={24} width={24} fill={colors.black} />
                </Layer>
            </Box>
        </>
    );
}
