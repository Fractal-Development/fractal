import React, { useState } from 'react';
import { useTheme, Box, Layer, Button, Text, blue } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getLayerAccessibilityProps } from './accessibility/getLayerAccessibilityProps';
const styleVariants = {
    layerInitial: { scale: 0, opacity: 0, backgroundColor: blue.base100 },
    layerVisible: { scale: 1, opacity: 1, backgroundColor: blue.base },
    initial: { height: 15, width: 15, opacity: 0 },
    visible: { height: 100, width: 100, opacity: 1 }
};
export function LayerAnimatedFragment() {
    const { spacings } = useTheme();
    const [layerVariant, setLayerVariant] = useState('layerVisible');
    const toggleVariant = () => setLayerVariant((currentValue) => (currentValue === 'layerVisible' ? 'layerInitial' : 'layerVisible'));
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Layer Animated Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Layer, Object.assign({ height: 100, width: 100, initial: 'layerInitial', backgroundColor: '#FFF', animate: layerVariant, variants: styleVariants }, getLayerAccessibilityProps())),
            React.createElement(Button, { width: 268, variant: 'main', alignSelf: 'center', text: 'Toggle animation', onPress: toggleVariant, marginTop: spacings.s }))));
}
//# sourceMappingURL=LayerAnimatedFragment.js.map