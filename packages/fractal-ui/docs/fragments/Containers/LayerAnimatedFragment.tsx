import React, { useState, Fragment } from 'react';
import { useTheme, Box, Layer, Button, Text, blue, white } from '../../../src';
import { getLayerAnimatedAccessibilityProps } from './accessibility/getLayerAnimatedAccessibilityProps';
import { getLayerAccessibilityProps } from './accessibility/getLayerAccessibilityProps';

const styleVariants = {
    from: { scale: 0, opacity: 0, backgroundColor: blue.base100 },
    layerVisible: { scale: 1, opacity: 1, backgroundColor: blue.base }
};

const styleVariants2 = {
    from: { backgroundColor: white.base300 },
    layerVisible: { backgroundColor: blue.base300 }
};

export function LayerAnimatedFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [layerVariant, setLayerVariant] = useState('from');

    const toggleVariant = () => setLayerVariant((currentValue) => (currentValue === 'layerVisible' ? 'from' : 'layerVisible'));

    return (
        <>
            <Text variant={'title'}>Layer Animated Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl} {...getLayerAnimatedAccessibilityProps()}>
                {[1, 2].map((item) => {
                    return (
                        <Fragment key={`key-${item}`}>
                            <Layer
                                height={100}
                                width={100}
                                backgroundColor={'#FFF'}
                                currentVariant={layerVariant}
                                variants={styleVariants2}
                                {...getLayerAccessibilityProps()}
                            />
                            <Layer height={16} />
                        </Fragment>
                    );
                })}
                <Layer
                    height={100}
                    width={100}
                    backgroundColor={'#FFF'}
                    currentVariant={layerVariant}
                    variants={styleVariants}
                    {...getLayerAccessibilityProps()}
                />
                <Layer height={20} />
                <Layer
                    height={100}
                    width={100}
                    backgroundColor={'#FFF'}
                    currentVariant={layerVariant}
                    variants={styleVariants2}
                    {...getLayerAccessibilityProps()}
                />
                <Button
                    width={268}
                    variant={'main'}
                    alignSelf={'center'}
                    text={'Toggle animation'}
                    onPress={toggleVariant}
                    marginTop={spacings.s}
                />
            </Box>
        </>
    );
}
