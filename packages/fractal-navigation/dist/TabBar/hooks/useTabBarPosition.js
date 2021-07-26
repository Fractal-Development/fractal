import { useContext } from 'react';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
export function useTabBarPosition() {
    const [position] = useContext(TabBarPositionContext);
    return position;
}
//# sourceMappingURL=useTabBarPosition.js.map