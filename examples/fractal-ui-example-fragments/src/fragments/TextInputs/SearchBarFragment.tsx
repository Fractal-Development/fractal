import React, { useState } from 'react';
import { useTheme, Box, HorizontalLayer, Popover, SearchBar, Button, Text, CircularIconButton } from '@bma98/fractal-ui';

function PopoverContent(): JSX.Element {
    return (
        <Box width={110}>
            <Button variant={'alternative'} text={'Pasion'} />
        </Box>
    );
}

export function SearchBarFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);

    const deactivate = () => setActive(false);
    const toggleActive = () => setActive((active) => !active);

    return (
        <>
            <Text variant={'title'}>Search Bar Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <SearchBar
                    placeholder={'Search Bar'}
                    buttonVariant={'main'}
                    onChangeText={(text) => console.log(`New text ${text}`)}
                    onSearch={(query: string) => console.log('Query: ', query)}
                    marginBottom={spacings.m}
                />
                <SearchBar
                    enableSearchButton
                    placeholder={'Search Bar with button'}
                    buttonVariant={'main'}
                    onChangeText={(text) => console.log(`New text ${text}`)}
                    onSearch={(query: string) => console.log('Query: ', query)}
                    marginBottom={spacings.m}
                />
                <HorizontalLayer>
                    <SearchBar
                        enableSearchButton
                        placeholder={'Search Bar with button and other component'}
                        buttonVariant={'main'}
                        flex={1}
                        onChangeText={(text) => console.log(`New text ${text}`)}
                        onSearch={(query: string) => console.log('Query: ', query)}
                    />
                    <Popover active={active} onRequestClose={deactivate} popoverChildren={() => <PopoverContent />}>
                        {(ref) => (
                            <CircularIconButton ref={ref} onPress={toggleActive} variant={'success'} marginLeft={spacings.s}>
                                {() => <CircularIconButton height={24} width={24} />}
                            </CircularIconButton>
                        )}
                    </Popover>
                </HorizontalLayer>
            </Box>
        </>
    );
}
