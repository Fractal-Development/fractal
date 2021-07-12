import React from 'react';
import { useTheme, Box, Text, ErrorMessage } from '@bma98/fractal-ui';
import { BuggyComponent } from './BuggyComponent';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
function logErrorToService(error, componentStack) {
    console.log('Log Error To Service: ', { error, componentStack });
}
export function ErrorMessageFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Error Message Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(ErrorMessage, { onError: logErrorToService },
                React.createElement(BuggyComponent, null)))));
}
//# sourceMappingURL=ErrorMessageFragment.js.map