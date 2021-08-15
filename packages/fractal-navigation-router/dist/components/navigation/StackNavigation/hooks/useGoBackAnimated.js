import { useContext } from 'react';
import { StackNavigationGoBackAnimatedContext } from '../context/StackNavigationGoBackAnimatedProvider';
import { useHistory } from '../../../../router';
export function useGoBackAnimated() {
    const goBacKAnimated = useContext(StackNavigationGoBackAnimatedContext);
    const { goBack } = useHistory();
    return goBacKAnimated !== null && goBacKAnimated !== void 0 ? goBacKAnimated : goBack;
}
//# sourceMappingURL=useGoBackAnimated.js.map