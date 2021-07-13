import React from 'react';
import { useTheme, ChipList, Layer, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ChipListFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Chip List Fragment"),
        React.createElement(Layer, { flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ChipList, { data: [], getLabel: (item) => {
                    console.log(item);
                    return item;
                }, onItemPress: (item) => {
                    console.log(item);
                } }))));
}
//# sourceMappingURL=ChipListFragment.js.map