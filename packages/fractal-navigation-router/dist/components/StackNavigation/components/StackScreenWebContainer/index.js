import React from 'react';
import { StackScreenWebModalContainer } from './StackScreenWebModalContainer';
import { useScreenActivityState } from '../../../NavigationRoute/hooks/useScreenActivityState';
import { StackScreenWebPushContainer } from './StackScreenWebPushContainer';
export function StackScreenWebContainer({ isTabScreen, path = '/', stackPresentation = 'push', isRootRoute = false, children }) {
    const activityState = useScreenActivityState(path, isTabScreen !== null && isTabScreen !== void 0 ? isTabScreen : false);
    if (stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return React.createElement(StackScreenWebPushContainer, null, children);
    }
    if (stackPresentation === 'modal') {
        return activityState > 0 ? React.createElement(StackScreenWebModalContainer, null, children) : null;
    }
    return React.createElement(React.Fragment, null, children);
}
//# sourceMappingURL=index.js.map