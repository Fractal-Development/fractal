import { matchPath } from '../../../../../router';
import { NavigationRouteProps } from '../../../../NavigationRoute/types/NavigationRouteProps';

export function filterMatchingChildren(children: Array<JSX.Element>, pathname: string): Array<JSX.Element> {
    return children.filter((child: JSX.Element) => {
        const { path = '/' } = child.props as NavigationRouteProps;

        const match = matchPath(pathname, {
            path
        });

        return match != null;
    });
}
