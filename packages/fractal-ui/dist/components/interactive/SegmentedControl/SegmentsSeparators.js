import * as React from 'react';
import { useTheme } from '../../../core';
import { Layer } from '../../layout';
export function SegmentsSeparators({ values, selectedIndex }) {
    const { colors } = useTheme();
    const hide = (value) => selectedIndex === value || selectedIndex === value + 1;
    return (React.createElement(Layer, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }, [...Array.from(new Array(values - 1).keys())].map((value) => (React.createElement(Layer, { key: value, width: 1, height: '50%', backgroundColor: hide(value) ? 'transparent' : colors.placeholder })))));
}
//# sourceMappingURL=SegmentsSeparators.js.map