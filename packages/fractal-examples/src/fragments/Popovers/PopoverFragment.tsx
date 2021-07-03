import React, { useState } from 'react';
import { useTheme, Box, Button, Text, Popover, PlacementType } from '@bma98/fractal-ui';

function PopoverContent(): JSX.Element {
    return (
        <Box width={120}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

export function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();

    const [popoversVisibles, setPopoversVisibles] = useState({
        top: false,
        bottom: false,
        right: false,
        left: false
    });

    const showPopover = (popover: PlacementType) => {
        if (popover === 'top') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, top: true };
            });
        }
        if (popover === 'bottom') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, bottom: true };
            });
        }
        if (popover === 'right') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, right: true };
            });
        }
        if (popover === 'left') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, left: true };
            });
        }
    };

    const hidePopover = (popover: PlacementType) => {
        if (popover === 'top') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, top: false };
            });
        }
        if (popover === 'bottom') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, bottom: false };
            });
        }
        if (popover === 'right') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, right: false };
            });
        }
        if (popover === 'left') {
            setPopoversVisibles((currentValue) => {
                return { ...currentValue, left: false };
            });
        }
    };

    return (
        <>
            <Text variant={'title'}>PopoverView Example</Text>
            <Box marginTop={spacings.m} alignItems={'center'}>
                <Popover
                    placement={'bottom'}
                    active={popoversVisibles.bottom}
                    onRequestClose={() => hidePopover('bottom')}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={220} onPress={() => showPopover('bottom')} text={'Bottom'} />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m} alignItems={'center'}>
                <Popover
                    placement={'top'}
                    active={popoversVisibles.top}
                    onRequestClose={() => hidePopover('top')}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={220} onPress={() => showPopover('top')} text={'Top'} />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m}>
                <Popover
                    placement={'right'}
                    active={popoversVisibles.right}
                    onRequestClose={() => hidePopover('right')}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={120} onPress={() => showPopover('right')} text={'Right'} />}
                </Popover>
            </Box>
            <Box marginTop={spacings.m} marginBottom={spacings.m} alignItems={'flex-end'}>
                <Popover
                    placement={'left'}
                    active={popoversVisibles.left}
                    onRequestClose={() => hidePopover('left')}
                    popoverChildren={() => <PopoverContent />}
                >
                    {(ref) => <Button ref={ref} variant={'main'} width={120} onPress={() => showPopover('left')} text={'Left'} />}
                </Popover>
            </Box>
        </>
    );
}
