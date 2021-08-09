import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';
export function useShowNavigationBarBackButton(path) {
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    return stackNavigatorRootPath === path;
}
//# sourceMappingURL=useShowNavigationBarBackButton.js.map