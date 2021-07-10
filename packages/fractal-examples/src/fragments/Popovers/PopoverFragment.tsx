import React, { useState } from 'react';
import { useTheme, Box, Button, Text, Popover, LayerProps } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

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
    const toggleTopPopover = () => setTopPopoverVisible((current) => !current);

    const [isRightPopoverVisible, setRightPopoverVisible] = useState(false);
    const toggleRightPopover = () => setRightPopoverVisible((current) => !current);

    const [isBottomPopoverVisible, setBottomPopoverVisible] = useState(false);
    const toggleBottomPopover = () => setBottomPopoverVisible((current) => !current);

    const [isLeftPopoverVisible, setLeftPopoverVisible] = useState(false);
    const toggleLeftPopover = () => setLeftPopoverVisible((current) => !current);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                PopoverView Example
            </Text>
            <Box marginTop={spacings.m} alignItems={'center'}>
                <Popover
                    placement={'bottom'}
                    marginTop={spacings.m}
                    active={isBottomPopoverVisible}
                    onRequestClose={toggleBottomPopover}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={220} onPress={toggleBottomPopover} text={'Bottom'} />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m} alignItems={'center'}>
                <Popover
                    placement={'top'}
                    marginBottom={spacings.m}
                    active={isTopPopoverVisible}
                    onRequestClose={toggleTopPopover}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={220} onPress={toggleTopPopover} text={'Top'} />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m}>
                <Popover
                    placement={'right'}
                    marginLeft={spacings.m}
                    active={isRightPopoverVisible}
                    onRequestClose={toggleRightPopover}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={120} onPress={toggleRightPopover} text={'Right'} />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m} marginBottom={spacings.m} alignItems={'flex-end'}>
                <Popover
                    placement={'left'}
                    marginRight={spacings.m}
                    active={isLeftPopoverVisible}
                    onRequestClose={toggleLeftPopover}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={120} onPress={toggleLeftPopover} text={'Left'} />}
                </Popover>
            </Box>
        </>
    );
}
