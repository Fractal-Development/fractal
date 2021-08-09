import { useRouteMatch } from '../router';

export function useIsRouteActive(path: string, exact: boolean): boolean {
    const match = useRouteMatch({
        path,
        exact,
        strict: exact
    });

    return match != null;
}
