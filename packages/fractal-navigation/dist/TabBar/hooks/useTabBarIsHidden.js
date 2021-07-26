import { useContext } from 'react';
import { TabBarIsHiddenContext } from '../context/TabBarIsHiddenProvider';
export function useTabBarIsHidden() {
    const [hidden] = useContext(TabBarIsHiddenContext);
    return hidden;
}
//# sourceMappingURL=useTabBarIsHidden.js.map