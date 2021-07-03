import React, { useState } from 'react';
import { useTheme, Box, Button, Text, BlurrediOSModal } from '@bma98/fractal-ui';
export function BlurredModalFragment() {
    const { spacings } = useTheme();
    const [blurredModalVisible, setBlurredModalVisible] = useState(false);
    const toggleBlurredModal = () => setBlurredModalVisible((currentValue) => !currentValue);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Blurred Modal Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Button, { variant: 'main', text: 'Show Blurred Modal', onPress: toggleBlurredModal }),
            React.createElement(BlurrediOSModal, { visible: blurredModalVisible, dismissText: 'Done', onDismiss: toggleBlurredModal },
                React.createElement(Box, { margin: spacings.m },
                    React.createElement(Button, { variant: 'warning', text: 'Dismiss Modal', onPress: toggleBlurredModal }))))));
}
//# sourceMappingURL=BlurredModalFragment.js.map