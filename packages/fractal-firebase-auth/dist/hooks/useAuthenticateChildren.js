import { AuthenticateChildrenKey } from '../types';
import React, { Fragment, useMemo } from 'react';
export function useAuthenticateChildren(children) {
    return useMemo(() => {
        let AppComponent = {
            component: React.createElement(Fragment, null),
            route: 'app'
        };
        let LoadingComponent = {
            component: React.createElement(Fragment, null),
            route: 'loading'
        };
        let AuthenticationComponent = {
            component: React.createElement(Fragment, null),
            route: 'authenticate'
        };
        let CreateUserComponent = {
            component: React.createElement(Fragment, null),
            route: 'create_user'
        };
        React.Children.forEach(children, (child) => {
            const props = child.props;
            switch (child.key) {
                case AuthenticateChildrenKey.AppContent:
                    AppComponent = {
                        component: child,
                        route: props.route
                    };
                    break;
                case AuthenticateChildrenKey.Loading:
                    LoadingComponent = {
                        component: child,
                        route: props.route
                    };
                    break;
                case AuthenticateChildrenKey.Authentication:
                    AuthenticationComponent = {
                        component: child,
                        route: props.route
                    };
                    break;
                case AuthenticateChildrenKey.CreateUser:
                    CreateUserComponent = {
                        component: child,
                        route: props.route
                    };
                    break;
                default:
                    break;
            }
        });
        return [AppComponent, LoadingComponent, AuthenticationComponent, CreateUserComponent];
    }, [children]);
}
//# sourceMappingURL=useAuthenticateChildren.js.map