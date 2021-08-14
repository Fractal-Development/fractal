import React from 'react';
import { useTheme, ChipList, Layer, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function ChipListFragment() {
    const { spacings } = useTheme();
    const tags = [
        { id: '0', value: 'tag 1' },
        { id: '1', value: 'tag 2' },
        { id: '2', value: 'tag 3' },
        { id: '3', value: 'tag 4' },
        { id: '4', value: 'tag 5' }
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Chip List Fragment"),
        React.createElement(Layer, { flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ChipList, { data: tags, getLabel: (item) => {
                    return item.value;
                }, onItemPress: (item) => {
                    console.log(item);
                } }))));
}
//# sourceMappingURL=ChipListFragment.js.map