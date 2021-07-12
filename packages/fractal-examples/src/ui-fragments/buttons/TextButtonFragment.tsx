import React from 'react';
import { useTheme, Box, TextButton, Text, SearchIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function TextButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Text Button Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <TextButton variant={'main'} marginBottom={spacings.s}>
                    Main
                </TextButton>
                <TextButton variant={'main'} marginBottom={spacings.s} disabled>
                    Main disabled
                </TextButton>
                <TextButton variant={'alternative'} marginBottom={spacings.s}>
                    Alternative
                </TextButton>
                <TextButton variant={'alternative'} marginBottom={spacings.s} disabled>
                    Alternative disabled
                </TextButton>
                <TextButton variant={'danger'} marginBottom={spacings.s}>
                    Danger
                </TextButton>
                <TextButton variant={'danger'} marginBottom={spacings.s} disabled>
                    Danger disabled
                </TextButton>
                <TextButton variant={'warning'} marginBottom={spacings.s}>
                    Warning
                </TextButton>
                <TextButton variant={'warning'} marginBottom={spacings.s} disabled>
                    Warning disabled
                </TextButton>
                <TextButton variant={'success'} marginBottom={spacings.s}>
                    Success
                </TextButton>
                <TextButton variant={'success'} marginBottom={spacings.s} disabled>
                    Success disabled
                </TextButton>
                <TextButton
                    variant={'main'}
                    flexDirection={'row'}
                    marginBottom={spacings.s}
                    leftIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                >
                    Main with left icon
                </TextButton>
                <TextButton
                    disabled
                    variant={'main'}
                    flexDirection={'row'}
                    marginBottom={spacings.s}
                    leftIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                >
                    Main with left icon disabled
                </TextButton>
                <TextButton
                    variant={'alternative'}
                    flexDirection={'row'}
                    marginBottom={spacings.s}
                    rightIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                >
                    Alternative with right icon
                </TextButton>
                <TextButton
                    disabled
                    variant={'alternative'}
                    flexDirection={'row'}
                    marginBottom={spacings.s}
                    rightIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                >
                    Alternative with right icon disabled
                </TextButton>
                <TextButton
                    variant={'danger'}
                    flexDirection={'row'}
                    marginBottom={spacings.s}
                    leftIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                    rightIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                >
                    Danger with left and right icon
                </TextButton>
                <TextButton
                    disabled
                    variant={'danger'}
                    flexDirection={'row'}
                    marginBottom={spacings.s}
                    leftIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                    rightIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
                >
                    Danger with left and right icon disabled
                </TextButton>
            </Box>
        </>
    );
}
