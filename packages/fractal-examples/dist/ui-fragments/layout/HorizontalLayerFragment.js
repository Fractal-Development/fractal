import React from 'react';
import { useTheme, Box, Layer, Text, HorizontalLayer } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getHorizontalLayerAccessibilityProps } from './accessibility/getHorizontalLayerAccessibilityProps';
export function HorizontalLayerFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Horizontal Layer Fragment"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(HorizontalLayer, Object.assign({ height: 150, borderStyle: "solid", borderWidth: 2, borderColor: colors.black }, getHorizontalLayerAccessibilityProps()),
                React.createElement(Box, { alignItems: "center", justifyContent: "center", width: "50%" },
                    React.createElement(Text, { variant: "subtitle" }, "Horizontal Layer")),
                React.createElement(Box, { alignItems: "center", justifyContent: "center", width: "50%" },
                    React.createElement(Text, { variant: "subtitle" }, "Horizontal Layer"))))));
}
//# sourceMappingURL=HorizontalLayerFragment.js.map