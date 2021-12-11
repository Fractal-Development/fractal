import React, { useState } from 'react';
import { useTheme, Box, Button, Text, DimmedModal } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function DimmedModalFragment() {
    const { spacings } = useTheme();
    const [dimmedModalVisible, setDimmedModalVisible] = useState(false);
    const toggleDimmedModal = () => setDimmedModalVisible((currentValue) => !currentValue);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Dimmed Modal Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Button, { variant: 'main', text: 'Show Dimmed Modal', onPress: toggleDimmedModal }),
            React.createElement(DimmedModal, { visible: dimmedModalVisible, onDismiss: toggleDimmedModal },
                React.createElement(Box, null,
                    React.createElement(Button, { variant: 'warning', text: 'Dismiss Dimmed Modal', onPress: toggleDimmedModal }))))));
}
//# sourceMappingURL=DimmedModalFragment.js.map