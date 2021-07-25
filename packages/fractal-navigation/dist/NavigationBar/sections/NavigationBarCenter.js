import React, { memo } from 'react';
import { Layer, Text } from '@bma98/fractal-ui';
import { titleStyle } from './util/titleStyle';
export const NavigationBarCenter = memo(({ children, title }) => {
    return (React.createElement(Layer, { justifyContent: 'center', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 }, children ? (children) : title ? (React.createElement(Text, { fontWeight: 600, fontSize: 16, numberOfLines: 1, style: titleStyle }, title)) : null));
});
//# sourceMappingURL=NavigationBarCenter.js.map