import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';
export function useIsRootNavigationBar(path) {
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    return stackNavigatorRootPath === path;
}
//# sourceMappingURL=useIsRootNavigationBar.js.map