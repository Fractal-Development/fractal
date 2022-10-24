import { useMatch } from '../router';

export function useIsRouteActive(path: string, exact: boolean): boolean {
    const match = useMatch({
        path,
        end: exact
    });

    return match != null;
}
