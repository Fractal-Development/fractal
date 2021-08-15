import React, { memo, useCallback } from 'react';
import { Layer } from '@bma98/fractal-ui';
import { ChevronLeft } from '../../assets';
import { NavigationBarButton } from '../../buttons';
export const NavigationBarLeft = memo(({ children, showBackButton, backTitle, goBack }) => {
    const renderChevronLeft = useCallback((color) => (React.createElement(Layer, { marginRight: 2 },
        React.createElement(ChevronLeft, { height: 20, width: 20, fill: color }))), []);
    return (React.createElement(Layer, { justifyContent: 'flex-start', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 },
        showBackButton ? (React.createElement(NavigationBarButton, { leftIcon: renderChevronLeft, onPress: goBack }, backTitle)) : null,
        children));
});
NavigationBarLeft.displayName = 'NavigationBarLeft';
//# sourceMappingURL=NavigationBarLeft.js.map