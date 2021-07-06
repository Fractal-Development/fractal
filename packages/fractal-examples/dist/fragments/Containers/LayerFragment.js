import React from 'react';
import { useTheme, Box, Layer, Text, PaddingLayer, MarginLayer, HorizontalLayer } from '@bma98/fractal-ui';
import { getHorizontalLayerAccessibilityProps } from './accessibility/getHorizontalLayerAccessibilityProps';
import { getMarginLayerAccessibilityProps } from './accessibility/getMarginLayerAccessibilityProps';
import { getPaddingLayerAccessibilityProps } from './accessibility/getPaddingLayerAccessibilityProps';
export function LayerFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Layer Examples"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(HorizontalLayer, Object.assign({ height: 150, borderStyle: 'solid', borderWidth: 2, borderColor: colors.black }, getHorizontalLayerAccessibilityProps()),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Horizontal Layer")),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Horizontal Layer"))),
            React.createElement(MarginLayer, Object.assign({ height: 150, borderStyle: 'solid', borderWidth: 2, borderColor: colors.black }, getMarginLayerAccessibilityProps()),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Margin Layer")),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Margin Layer"))),
            React.createElement(PaddingLayer, Object.assign({ height: 150, borderStyle: 'solid', borderWidth: 2, borderColor: colors.black }, getPaddingLayerAccessibilityProps()),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Padding Layer")),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Padding Layer"))))));
}
//# sourceMappingURL=LayerFragment.js.map