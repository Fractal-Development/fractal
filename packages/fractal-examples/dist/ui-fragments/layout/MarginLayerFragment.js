import React from 'react';
import { useTheme, Box, Layer, Text, MarginLayer } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
import { getMarginLayerAccessibilityProps } from './accessibility/getMarginLayerAccessibilityProps';
export function MarginLayerFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Margin Layer Fragment"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(MarginLayer, Object.assign({ height: 150, borderStyle: 'solid', borderWidth: 2, borderColor: colors.black }, getMarginLayerAccessibilityProps()),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Margin Layer")),
                React.createElement(Box, { alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%' },
                    React.createElement(Text, { variant: 'subtitle' }, "Margin Layer"))))));
}
//# sourceMappingURL=MarginLayerFragment.js.map