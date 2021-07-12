import React, { useState } from 'react';
import {
    useTheme,
    Box,
    RoundedToggleButton,
    Text,
    AppleIcon,
    BugIcon,
    CheckIcon,
    ChevronDownIcon,
    FacebookIcon,
    GoogleIcon
} from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function RoundedToggleButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);

    const toggleActive = (active: boolean | ((prevState: boolean) => boolean)) => setActive(active);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Rounded Toggle Button Example
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <RoundedToggleButton variant={'main'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <FacebookIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'main'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} disabled>
                    {(color) => <FacebookIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'main'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                >
                    {(color) => <FacebookIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'main'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                    disabled
                >
                    {(color) => <FacebookIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'alternative'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <AppleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'alternative'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    disabled
                >
                    {(color) => <AppleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'alternative'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                >
                    {(color) => <AppleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'alternative'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                    disabled
                >
                    {(color) => <AppleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'danger'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <BugIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'danger'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} disabled>
                    {(color) => <BugIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'danger'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                >
                    {(color) => <BugIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'danger'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                    disabled
                >
                    {(color) => <BugIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'warning'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <CheckIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'warning'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} disabled>
                    {(color) => <CheckIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'warning'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                >
                    {(color) => <CheckIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'warning'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                    disabled
                >
                    {(color) => <CheckIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'success'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'success'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} disabled>
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'success'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                >
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton
                    variant={'success'}
                    active={active}
                    onActiveChange={toggleActive}
                    marginBottom={spacings.s}
                    useGrayVariant
                    disabled
                >
                    {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'content'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                    {(color) => <GoogleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'content'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} disabled>
                    {(color) => <GoogleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'content'} active={active} onActiveChange={toggleActive} useGrayVariant>
                    {(color) => <GoogleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
                <RoundedToggleButton variant={'content'} active={active} onActiveChange={toggleActive} useGrayVariant disabled>
                    {(color) => <GoogleIcon height={24} width={24} fill={color} />}
                </RoundedToggleButton>
            </Box>
        </>
    );
}
