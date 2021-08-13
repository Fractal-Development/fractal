import { useContext } from 'react';
import { StackNavigationGoBackAnimatedContext } from '../context/StackNavigationGoBackAnimatedProvider';
export function useGoBackAnimated() {
    return useContext(StackNavigationGoBackAnimatedContext)[1];
}
//# sourceMappingURL=useGoBackAnimated.js.map