import React, { useState } from 'react';
import { Box, useTheme, Button, Layer } from '@bma98/fractal-ui';
import { PieChart } from '@bma98/fractal-charts';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
export function PieChartExample({ data }) {
    const [selectedIndex, setSelectedIndex] = useState(undefined);
    const [type] = useWidthSizeGroup();
    const { spacings } = useTheme();
    const flexDirection = getValueForLargeSizeType(type, 'row', 'column');
    const marginBottom = getValueForLargeSizeType(type, 0, spacings.m);
    const handleIndex = (index) => {
        setSelectedIndex(index);
    };
    return (React.createElement(Box, { marginBottom: spacings.m },
        React.createElement(PieChart, { height: 200, data: data, selectedSliceIndex: selectedIndex, flexDirection: flexDirection }),
        React.createElement(Layer, { flexDirection: getValueForLargeSizeType(type, 'row', 'column'), marginTop: spacings.m },
            React.createElement(Button, { variant: 'main', minWidth: 120, marginBottom: marginBottom, text: 'One', onPress: () => handleIndex(0) }),
            React.createElement(Button, { variant: 'alternative', minWidth: 120, marginBottom: marginBottom, text: 'Two', onPress: () => handleIndex(1) }),
            React.createElement(Button, { variant: 'success', minWidth: 120, marginBottom: marginBottom, text: 'Three', onPress: () => handleIndex(2) }))));
}
//# sourceMappingURL=PieChartExample.js.map