import React, { memo } from 'react';
import { Layer, Text, useTheme } from '@bma98/fractal-ui';
import { titleStyle } from './util/titleStyle';
export const NavigationBarCenter = memo(({ children, title }) => {
    const { navigationBar } = useTheme();
    return (React.createElement(Layer, { justifyContent: 'center', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 }, children ? (children) : title ? (React.createElement(Text, Object.assign({}, navigationBar.title, { textAlign: 'center', numberOfLines: 1, style: titleStyle }), title)) : null));
});
NavigationBarCenter.displayName = 'NavigationBarCenter';
//# sourceMappingURL=NavigationBarCenter.js.map