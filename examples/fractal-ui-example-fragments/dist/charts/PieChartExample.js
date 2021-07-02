import React, { useState } from 'react';
import { Box, HorizontalLayer, useTheme, Button } from '@bma98/fractal-ui';
import { PieChart } from '@bma98/fractal-charts';
export function PieChartExample({ data }) {
    const [selectedIndex, setSelectedIndex] = useState(undefined);
    const { spacings } = useTheme();
    const handleIndex = (index) => {
        setSelectedIndex(index);
    };
    return (React.createElement(Box, { marginBottom: spacings.m },
        React.createElement(PieChart, { height: 200, data: data, selectedSliceIndex: selectedIndex }),
        React.createElement(HorizontalLayer, { justifyContent: 'space-evenly', marginTop: 20 },
            React.createElement(Button, { text: 'One', backgroundColor: data[0].color, onPress: () => handleIndex(0) }),
            React.createElement(Button, { text: 'Two', backgroundColor: data[1].color, onPress: () => handleIndex(1) }),
            React.createElement(Button, { text: 'Three', backgroundColor: data[2].color, onPress: () => handleIndex(2) }))));
}
//# sourceMappingURL=PieChartExample.js.map