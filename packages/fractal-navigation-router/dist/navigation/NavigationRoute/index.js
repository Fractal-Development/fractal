import React from 'react';
import { StackScreenWebModalContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebModalContainer';
import { StackScreenWebContainer } from '../StackNavigation/components/StackScreenWebContainers/StackScreenWebContainer';
import { NavigationRouteContent } from './NavigationRouteContent';
import { useScreenActivityState } from './hooks/useScreenActivityState';
export function NavigationRoute(props) {
    const { isTabScreen, path = '/', stackPresentation = 'push', isRootRoute = false } = props;
    const activityState = useScreenActivityState(path, isTabScreen !== null && isTabScreen !== void 0 ? isTabScreen : false);
    if (stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return (React.createElement(StackScreenWebContainer, null,
            React.createElement(NavigationRouteContent, Object.assign({}, props))));
    }
    else if (stackPresentation === 'modal') {
        return activityState > 0 ? (React.createElement(StackScreenWebModalContainer, null,
            React.createElement(NavigationRouteContent, Object.assign({}, props)))) : null;
    }
    else {
        return React.createElement(NavigationRouteContent, Object.assign({}, props));
    }
}
//# sourceMappingURL=index.js.map