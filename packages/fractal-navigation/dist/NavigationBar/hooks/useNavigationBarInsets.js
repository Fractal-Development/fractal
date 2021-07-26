import { useContext } from 'react';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';
export function useNavigationBarInsets() {
    return useContext(NavigationBarInsetsContext)[0];
}
//# sourceMappingURL=useNavigationBarInsets.js.map