import React, { memo } from 'react';
import { Layer } from '@bma98/fractal-ui';
export const NavigationBarRight = memo(({ children }) => {
    return (React.createElement(Layer, { justifyContent: 'flex-end', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 }, children));
});
//# sourceMappingURL=NavigationBarRight.js.map