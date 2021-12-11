import React, { useCallback } from 'react';
import { useTheme, Box, Layer, Image, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ImageFragment() {
    const { spacings } = useTheme();
    const resizeModes = ['contain', 'center', 'repeat', 'cover', 'stretch'];
    const renderItem = useCallback((resizeMode) => {
        const text = `Image with ${resizeMode} resize mode`;
        return (React.createElement(Layer, { key: resizeMode, alignItems: "center" },
            React.createElement(Text, Object.assign({ variant: "subtitle", alignItems: "center", marginTop: spacings.m, marginBottom: spacings.xs }, getTitleTextAccessibilityProps(2)), text),
            React.createElement(Box, { marginBottom: spacings.s, height: 500, width: "100%" },
                React.createElement(Image, { source: "https://picsum.photos/id/870/200/300", label: "Asset", resizeMode: resizeMode, height: "100%", borderRadius: 16, marginTop: spacings.s }))));
    }, [spacings.m, spacings.s, spacings.xs]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Image Fragment"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Box, { marginBottom: spacings.s, flexDirection: "row" },
                React.createElement(Image, { source: "https://picsum.photos/id/870/200/300", label: 'Asset', width: 100, height: 64, borderRadius: 16, marginLeft: spacings.m })),
            resizeModes.map(renderItem))));
}
//# sourceMappingURL=ImageFragment.js.map