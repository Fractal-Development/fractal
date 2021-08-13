var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useHistory } from '../../../../router';
import { NavigationRoute } from '../../../NavigationRoute';
import { NativeNavigationBar, NavigationBar } from '@bma98/fractal-navigation';
import { useIsRootNavigationBar } from './hooks/useIsRootNavigationBar';
export function StackScreen(_a) {
    var { children, navBarConfig, stackPresentation = 'push', path } = _a, others = __rest(_a, ["children", "navBarConfig", "stackPresentation", "path"]);
    const { goBack } = useHistory();
    const isRootNavigationBar = useIsRootNavigationBar(path);
    const isNavigationBarForModal = stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android');
    return (React.createElement(NavigationRoute, Object.assign({ top: 0, left: 0, right: 0, bottom: 0, position: 'absolute', overflow: 'hidden' }, others, { onDismissed: goBack, stackPresentation: stackPresentation, path: path }),
        stackPresentation === 'modal' ? React.createElement(StatusBar, { barStyle: 'light-content' }) : null,
        isNavigationBarForModal ? (React.createElement(NavigationBar, Object.assign({ showBackButton: !isRootNavigationBar }, navBarConfig === null || navBarConfig === void 0 ? void 0 : navBarConfig.props, { goBack: goBack }))) : navBarConfig != null ? (React.createElement(NativeNavigationBar, Object.assign({ showBackButton: !isRootNavigationBar }, navBarConfig.props, { goBack: goBack }))) : null,
        children));
}
//# sourceMappingURL=index.native.js.map