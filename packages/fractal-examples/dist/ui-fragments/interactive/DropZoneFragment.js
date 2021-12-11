import React from 'react';
import { useTheme, Box, Dropzone, Layer, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function DropZoneFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Dropzone Fragment"),
        React.createElement(Layer, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Box, { marginBottom: spacings.s },
                React.createElement(Dropzone, { onChangeAcceptedFiles: (files) => console.log('Accepted files: ', files) })),
            React.createElement(Box, { marginTop: spacings.s },
                React.createElement(Dropzone, { text: "Dropzone pick multiple files ", webTextButton: "to explore", pickMultipleFiles: true, onChangeAcceptedFiles: (files) => console.log('Accepted files: ', files) })),
            React.createElement(Box, { marginTop: spacings.s },
                React.createElement(Dropzone, { text: "Dropzone with maximum number of files (5) ", webTextButton: "to explore", pickMultipleFiles: true, maxNumberFiles: 5, onChangeAcceptedFiles: (files) => console.log('Accepted files: ', files) })),
            React.createElement(Box, { marginTop: spacings.s },
                React.createElement(Dropzone, { text: "Dropzone with maximum number of file sizes (100 kB) ", webTextButton: "to explore", pickMultipleFiles: true, maxFileSize: 100000, onChangeAcceptedFiles: (files) => console.log('Accepted files: ', files) })))));
}
//# sourceMappingURL=DropZoneFragment.js.map