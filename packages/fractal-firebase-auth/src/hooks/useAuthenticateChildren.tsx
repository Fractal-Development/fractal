import { AuthenticateChildrenKey, ComponentRoutePair, ComponentRouteProps } from '../types';
import React, { Fragment, ReactElement, useMemo } from 'react';

export function useAuthenticateChildren(
    children: Array<JSX.Element>
): [ComponentRoutePair, ComponentRoutePair, ComponentRoutePair, ComponentRoutePair] {
    return useMemo(() => {
        let AppComponent: ComponentRoutePair = {
            component: <Fragment />,
            route: 'app'
        };
        let LoadingComponent: ComponentRoutePair = {
            component: <Fragment />,
            route: 'loading'
        };
        let AuthenticationComponent: ComponentRoutePair = {
            component: <Fragment />,
            route: 'authenticate'
        };
        let CreateUserComponent: ComponentRoutePair = {
            component: <Fragment />,
            route: 'create_user'
        };

        React.Children.forEach(children, (child: ReactElement<ComponentRouteProps>) => {
            const props = child.props as ComponentRouteProps;
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
