import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { MainExample } from '@bma98/fractal-examples';
import { ReactElement, useCallback, useState } from 'react';
import {
    Background,
    Layer,
    LayerProps,
    Text,
    FractalAppRoot,
    useTheme,
    HorizontalLayer,
    PaddingLayer,
    blue,
    red,
    brinkPink,
    Box,
    Pressable,
    ScrollView
} from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';

interface ColorTabProps {
    backgroundColor: string;
    text: string;
}

interface InternalColorTabProps extends ColorTabProps {
    active: boolean;
    index: number;
    onPress: (index: number) => void;
}

export function ColorTab({ backgroundColor, text, active, onPress, index }: InternalColorTabProps): ReactElement {
    const { borderRadius, colors, spacings } = useTheme();
    const handlePress = useCallback(() => {
        onPress(index);
    }, [index, onPress]);

    return (
        <Pressable
            onPress={handlePress}
            backgroundColor={colors.foreground}
            width={130}
            height={48}
            animate={{ opacity: active ? 1 : 0.6, scale: active ? 1 : 0.6 }}
            borderTopLeftRadius={borderRadius.m}
            borderTopRightRadius={borderRadius.m}
            alignItems={'center'}
            justifyContent={'flex-end'}
            padding={0}
        >
            <Text variant='button' color={colors.text} marginBottom={spacings.xs}>
                {text}
            </Text>
            <Layer width={'100%'} height={10} backgroundColor={backgroundColor} />
        </Pressable>
    );
}

export interface TabListProps extends LayerProps {
    tabs: Array<ColorTabProps>;
    children: (index: number) => ReactElement;
    onPress: (index?: number) => void;
}

export function ColorTabList({ children, tabs, onPress, ...others }: TabListProps): ReactElement {
    const { borderRadius } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const { backgroundColor } = tabs[activeIndex];
    const borderTopRightRadius = useValueForLargeSizeType('width', borderRadius.m, 0);

    const handlePress = useCallback(
        (index: number) => {
            setActiveIndex(index);
            onPress(index);
        },
        [onPress]
    );

    return (
        <Layer {...others}>
            <HorizontalLayer height={48}>
                <ScrollView horizontal>
                    {tabs.map((props, index) => (
                        <ColorTab key={index} {...props} onPress={handlePress} index={index} active={index === activeIndex} />
                    ))}
                </ScrollView>
            </HorizontalLayer>
            <Box
                borderTopLeftRadius={0}
                borderTopRightRadius={borderTopRightRadius}
                width={'100%'}
                flex={1}
                animate={{ backgroundColor }}
                transition={{ type: 'timing' }}
            >
                {children(activeIndex)}
            </Box>
        </Layer>
    );
}

const tabs: Array<ColorTabProps> = [
    { text: 'Primero', backgroundColor: blue.base },
    { text: 'Segundo', backgroundColor: red.base },
    { text: 'Tercero', backgroundColor: brinkPink.base }
];

export default function App() {
    return (
        <FractalAppRoot>
            <Background>
                <PaddingLayer flex={1}>
                    <ColorTabList flexGrow={1} width={'100%'} tabs={tabs} onPress={(index) => console.log(index)}>
                        {(index) => {
                            return <Text color={'white'}>{index}</Text>;
                        }}
                    </ColorTabList>
                </PaddingLayer>
            </Background>
        </FractalAppRoot>
    );
}
