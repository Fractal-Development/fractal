import React, { useState } from 'react';
import { useTheme, Box, Button, Text, Popover, LayerProps } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

function PopoverContent(props: LayerProps): JSX.Element {
    return (
        <Box {...props}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

export function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();

    const [isTopPopoverVisible, setTopPopoverVisible] = useState(false);
    const showModalTopPopover = () => {
        setTopPopoverVisible(true);
    };
    const hideModalTopPopover = () => {
        setTopPopoverVisible(false);
    };

    const [isRightPopoverVisible, setRightPopoverVisible] = useState(false);
    const showModalRightPopover = () => {
        setRightPopoverVisible(true);
    };
    const hideModalRightPopover = () => {
        setRightPopoverVisible(false);
    };

    const [isBottomPopoverVisible, setBottomPopoverVisible] = useState(false);
    const showModalBottomPopover = () => {
        setBottomPopoverVisible(true);
    };
    const hideModalBottomPopover = () => {
        setBottomPopoverVisible(false);
    };

    const [isLeftPopoverVisible, setLeftPopoverVisible] = useState(false);
    const showModalLeftPopover = () => {
        setLeftPopoverVisible(true);
    };
    const hideModalLeftPopover = () => {
        setLeftPopoverVisible(false);
    };

    const popoverChildren = () => <PopoverContent marginTop={spacings.m} />;

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                PopoverView Fragment
            </Text>
            <Box marginTop={spacings.m} alignItems='center'>
                <Popover
                    placement='bottom'
                    active={isBottomPopoverVisible}
                    onRequestClose={hideModalBottomPopover}
                    popoverChildren={popoverChildren}
                >
                    {(ref) => <Button ref={ref} variant='main' width={220} onPress={showModalBottomPopover} text='Bottom' />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m} alignItems='center' zIndex={isBottomPopoverVisible ? -1 : undefined}>
                <Popover
                    placement='top'
                    active={isTopPopoverVisible}
                    onRequestClose={hideModalTopPopover}
                    popoverChildren={popoverChildren}
                >
                    {(ref) => <Button ref={ref} variant='main' width={220} onPress={showModalTopPopover} text='Top' />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m}>
                <Popover
                    placement='right'
                    active={isRightPopoverVisible}
                    onRequestClose={hideModalRightPopover}
                    popoverChildren={popoverChildren}
                >
                    {(ref) => <Button ref={ref} variant='main' width={120} onPress={showModalRightPopover} text='Right' />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m} marginBottom={spacings.m} alignItems='flex-end'>
                <Popover
                    placement='left'
                    active={isLeftPopoverVisible}
                    onRequestClose={hideModalLeftPopover}
                    popoverChildren={popoverChildren}
                >
                    {(ref) => <Button ref={ref} variant='main' width={120} onPress={showModalLeftPopover} text='Left' />}
                </Popover>
            </Box>
        </>
    );
}
