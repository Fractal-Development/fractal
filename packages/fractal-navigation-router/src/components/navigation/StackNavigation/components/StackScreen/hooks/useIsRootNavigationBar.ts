import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';

export function useIsRootNavigationBar(path?: string): boolean {
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    return stackNavigatorRootPath === path;
}
