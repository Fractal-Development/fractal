import React, { forwardRef } from 'react';
import { Background } from './Background';
import { ActivityIndicator } from '../ActivityIndicator';
import { useTheme } from '../../context/hooks/useTheme';
const LoadingBackground = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return (React.createElement(Background, Object.assign({ ref: ref }, props),
        React.createElement(ActivityIndicator, { color: colors.mainInteractiveColor })));
});
LoadingBackground.displayName = 'LoadingBackground';
export { LoadingBackground };
//# sourceMappingURL=LoadingBackground.js.map