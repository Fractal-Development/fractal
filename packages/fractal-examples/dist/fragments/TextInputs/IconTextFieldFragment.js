import React from 'react';
import { useTheme, Box, IconTextField, Text, SearchIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
export function IconTextFieldFragment() {
    const { spacings } = useTheme();
    const renderSearchIcon = React.useCallback((color, size) => React.createElement(SearchIcon, { height: size, width: size, fill: color }), []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Icon Text Field Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(IconTextField, { leftImage: renderSearchIcon, placeholder: 'Escribe aqu\u00ED', marginBottom: spacings.s }),
            React.createElement(IconTextField, { rightImage: renderSearchIcon, placeholder: 'Escribe aqu\u00ED' }))));
}
//# sourceMappingURL=IconTextFieldFragment.js.map