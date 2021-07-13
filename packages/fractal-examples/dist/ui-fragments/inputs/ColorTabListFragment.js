import React from 'react';
import { useTheme, ColorTabList, Layer, Text, FileIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ColorTabListFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Color Tab List Fragment"),
        React.createElement(Layer, { flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ColorTabList, { tabs: [
                    { tabColor: colors.alternativeInteractiveColor, text: 'Tab 1' },
                    { tabColor: colors.contentInteractiveColor, text: 'Tab 2' },
                    { tabColor: colors.dangerInteractiveColor, text: 'Tab 3' }
                ] }, () => React.createElement(FileIcon, { height: 24, width: 24, fill: colors.text })))));
}
//# sourceMappingURL=ColorTabListFragment.js.map