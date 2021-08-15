import { matchPath } from '../../../../../router';
export function filterMatchingChildren(children, pathname) {
    return children.filter((child) => {
        const { path = '/' } = child.props;
        const match = matchPath(pathname, {
            path
        });
        return match != null;
    });
}
//# sourceMappingURL=filterMatchingChildren.js.map