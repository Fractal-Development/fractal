import React from 'react';
import { useTheme, Box, ImageBackground, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ImageBackgroundFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Image Background Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ImageBackground, { source: "https://picsum.photos/id/870/200/300", width: 200, height: 200, borderRadius: 16, justifyContent: "center" },
                React.createElement(Text, { variant: "button" }, "Lorem Ipsum is simply dummy text.")))));
}
//# sourceMappingURL=ImageBackgroundFragment.js.map