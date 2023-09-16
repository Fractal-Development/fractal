import { Background, Box, PaddingLayer, SafeAreaLayer, useColorScheme } from '@fractal-software/fractal-ui';

import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';
const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

export default function App() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <SafeAreaLayer className='flex-1'>
            <Background className='flex-1'>
                <PaddingLayer>
                    <Box>
                        <StyledPressable className='bg-primary-500 hover:bg-primary-600 rounded-lg py-2 px-4' onPress={toggleColorScheme}>
                            <StyledText className='text-white'>{`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}</StyledText>
                        </StyledPressable>
                    </Box>
                </PaddingLayer>
            </Background>
        </SafeAreaLayer>
    );
}
