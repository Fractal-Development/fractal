import { NavigationRouteProps } from '../../../../NavigationRoute/types/NavigationRouteProps';

export function filterMatchingChildren(children: Array<JSX.Element>, rootPath: string): Array<JSX.Element> {
    return children.filter((child: JSX.Element) => {
        const { path = '/' } = child.props as NavigationRouteProps;
        // TODO: Make this work with match to be compatible with the whole router
        return rootPath.includes(path);
    });
}
