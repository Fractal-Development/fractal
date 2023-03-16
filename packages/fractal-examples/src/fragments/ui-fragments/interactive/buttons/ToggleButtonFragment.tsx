import React, { useState } from 'react';
import { useTheme, Box, Text, ToggleButton, LoadIcon } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function ToggleButtonFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const [active, setActive] = useState(false);
    const [text, setText] = useState('Toggle Button');

    const toggleActive = (active: boolean | ((prevState: boolean) => boolean)) => {
        setActive(active);
        setText(active ? 'Toggle Button activated' : 'Toggle Button');
    };

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Toggle Button Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} alignItems='center'>
                <ToggleButton variant='main' active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {() => (
                        <Text variant='button' color={colors.text}>
                            {text}
                        </Text>
                    )}
                </ToggleButton>
                <ToggleButton variant='main' active={false} marginBottom={spacings.s} disabled>
                    {() => (
                        <Text variant='button' color={colors.text}>
                            Toggle Button disabled
                        </Text>
                    )}
                </ToggleButton>
                <Text variant='subtitle' alignItems='center' marginTop={spacings.lg} {...getTitleTextAccessibilityProps(2)}>
                    Toggle Button with icon
                </Text>
                <ToggleButton variant='main' active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </ToggleButton>
                <ToggleButton variant='main' active={active} onActiveChange={toggleActive} marginBottom={spacings.s} disabled>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </ToggleButton>
                <Text variant='subtitle' alignItems='center' marginTop={spacings.lg} {...getTitleTextAccessibilityProps(2)}>
                    Toggle Button with icon and useGrayVariant
                </Text>
                <ToggleButton variant='main' active={active} onActiveChange={toggleActive} useGrayVariant>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </ToggleButton>
                <ToggleButton variant='main' active={active} onActiveChange={toggleActive} useGrayVariant disabled>
                    {(color) => <LoadIcon height={24} width={24} fill={color} />}
                </ToggleButton>
            </Box>
        </>
    );
}
