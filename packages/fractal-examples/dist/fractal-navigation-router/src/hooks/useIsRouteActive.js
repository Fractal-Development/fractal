import { useRouteMatch } from '../router';
export function useIsRouteActive(path, exact) {
    const match = useRouteMatch({
        path,
        exact,
        strict: exact
    });
    return match != null;
}
//# sourceMappingURL=useIsRouteActive.js.map