import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';

export function useShowNavigationBarBackButton(path?: string): boolean {
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    return stackNavigatorRootPath === path;
}
