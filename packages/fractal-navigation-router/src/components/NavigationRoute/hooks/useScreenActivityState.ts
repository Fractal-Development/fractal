import { useIsRouteActive } from '../../../hooks/useIsRouteActive';

// 2 means is the screen on top of the stack, 1 means is behind but visible, 0 is not visible.
export function useScreenActivityState(path: string, isTabScreen: boolean): 2 | 1 | 0 {
    const isRouteActive = useIsRouteActive(path, false);
    const isRouteActiveAndExact = useIsRouteActive(path, true);

    if (isRouteActive) {
        return isRouteActiveAndExact || isTabScreen ? 2 : 1;
    }
    return 0;
}
