import React, { useState } from 'react';
import { useTheme, Box, Button, Text, BottomCellModal } from '@bma98/fractal-ui';
export function BottomCellModalFragment() {
    const { spacings } = useTheme();
    const [bottomCellVisible, setBottomCellVisible] = useState(false);
    const toggleBottomCell = () => setBottomCellVisible((currentValue) => !currentValue);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Bottom Cell Modal Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Button, { variant: 'main', text: 'Show Bottom Cell Modal', onPress: toggleBottomCell }),
            React.createElement(BottomCellModal, { visible: bottomCellVisible, onDismiss: toggleBottomCell },
                React.createElement(Box, null,
                    React.createElement(Button, { variant: 'warning', text: 'Dismiss Cell Modal', onPress: toggleBottomCell }))))));
}
//# sourceMappingURL=BottomCellModalFragment.js.map