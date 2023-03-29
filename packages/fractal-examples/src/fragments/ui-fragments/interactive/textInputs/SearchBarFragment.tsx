import React, { useState } from 'react';
import {
    useTheme,
    Box,
    HorizontalLayer,
    Popover,
    SearchBar,
    Button,
    Text,
    CircularIconButton,
    LoadIcon
} from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

function PopoverContent(): JSX.Element {
    const { spacings } = useTheme();
    return (
        <Box marginTop={spacings.m}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

export function SearchBarFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);
    const show = () => setActive(true);
    const hide = () => setActive(false);
    const popoverChildren = () => <PopoverContent />;

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Search Bar Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <SearchBar
                    placeholder='Search Bar'
                    buttonVariant='main'
                    onChangeText={(text) => console.log(`New text ${text}`)}
                    onSearch={(query: string) => console.log('Query: ', query)}
                    marginBottom={spacings.m}
                />
                <SearchBar
                    enableSearchButton
                    placeholder='Search Bar with button'
                    buttonVariant='main'
                    onChangeText={(text) => console.log(`New text ${text}`)}
                    onSearch={(query: string) => console.log('Query: ', query)}
                    marginBottom={spacings.m}
                />
                <HorizontalLayer>
                    <SearchBar
                        enableSearchButton
                        placeholder='Search Bar with button and other component'
                        buttonVariant='main'
                        flex={1}
                        onChangeText={(text) => console.log(`New text ${text}`)}
                        onSearch={(query: string) => console.log('Query: ', query)}
                    />
                    <Popover active={active} onRequestClose={hide} popoverChildren={popoverChildren}>
                        {(ref) => (
                            <CircularIconButton ref={ref} onPress={show} variant='success' marginLeft={spacings.s}>
                                {(color) => <LoadIcon height={24} width={24} fill={color} />}
                            </CircularIconButton>
                        )}
                    </Popover>
                </HorizontalLayer>
            </Box>
        </>
    );
}
