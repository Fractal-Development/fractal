import React from 'react';
import { useTheme, Chip, Layer, Text, FileIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ChipFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Chip Fragment"),
        React.createElement(Layer, { flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Chip, { text: 'Ver reportes', marginRight: spacings.s, onCrossButtonPress: () => console.log('Cross button pressed') }),
            React.createElement(Chip, { marginRight: spacings.s, onCrossButtonPress: () => console.log('Cross button pressed') },
                React.createElement(FileIcon, { height: 24, width: 24, fill: colors.text })))));
}
//# sourceMappingURL=ChipFragment.js.map