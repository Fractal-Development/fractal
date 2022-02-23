import React, { forwardRef } from 'react';
import { Background } from './Background';
import { ActivityIndicator } from '../feedback/ActivityIndicator';
import { useTheme } from '../../context';
const LoadingBackground = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return (React.createElement(Background, Object.assign({ ref: ref, justifyContent: 'center', alignItems: 'center' }, props),
        React.createElement(ActivityIndicator, { color: colors.mainInteractiveColor })));
});
LoadingBackground.displayName = 'LoadingBackground';
export { LoadingBackground };
//# sourceMappingURL=LoadingBackground.js.map