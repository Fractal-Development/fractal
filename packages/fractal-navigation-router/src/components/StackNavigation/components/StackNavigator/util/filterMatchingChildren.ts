import { matchPath } from '../../../../../router';
import { NavigationRouteProps } from '../../../../NavigationRoute/types';

export function filterMatchingChildren(children: Array<JSX.Element>, rootPath: string): Array<JSX.Element> {
    return children.filter((child: JSX.Element) => {
        const { path = '/' } = child.props as NavigationRouteProps;
        const match = matchPath(
            {
                path,
                end: false
            },
            rootPath
        );
        return match != null;
    });
}
