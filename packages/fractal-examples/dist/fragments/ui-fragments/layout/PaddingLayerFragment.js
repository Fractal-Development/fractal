import React from 'react';
import { useTheme, Box, Layer, Text, PaddingLayer } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getPaddingLayerAccessibilityProps } from './accessibility/getPaddingLayerAccessibilityProps';
export function PaddingLayerFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Padding Layer Fragment"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(PaddingLayer, Object.assign({ height: 150, borderStyle: "solid", borderWidth: 2, borderColor: colors.black }, getPaddingLayerAccessibilityProps()),
                React.createElement(Box, { alignItems: "center", justifyContent: "center", width: "100%", height: "50%" },
                    React.createElement(Text, { variant: "subtitle" }, "Padding Layer")),
                React.createElement(Box, { alignItems: "center", justifyContent: "center", width: "100%", height: "50%" },
                    React.createElement(Text, { variant: "subtitle" }, "Padding Layer"))))));
}
//# sourceMappingURL=PaddingLayerFragment.js.map