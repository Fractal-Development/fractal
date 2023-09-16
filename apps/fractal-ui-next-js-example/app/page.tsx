'use client';
import { useColorScheme, Background, Box, PaddingLayer } from '@fractal-software/fractal-ui';

export default function Home() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <Background className='flex-1'>
            <PaddingLayer>
                <Box>
                    <button onClick={toggleColorScheme} className='bg-primary-500 hover:bg-primary-600 rounded-lg py-2 px-4'>
                        <span className='text-white'>{`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}</span>
                    </button>
                </Box>
            </PaddingLayer>
        </Background>
    );
}
