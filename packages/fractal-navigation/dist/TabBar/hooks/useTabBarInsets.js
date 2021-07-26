import { useContext } from 'react';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';
export function useTabBarInsets() {
    const [insets] = useContext(TabBarInsetsContext);
    return insets;
}
//# sourceMappingURL=useTabBarInsets.js.map