import { useCallback, useContext } from 'react';
import { StackNavigationGoBackAnimatedContext } from '../context/StackNavigationGoBackAnimatedProvider';
import { useNavigate } from '../../../router';

export function useGoBackAnimated(): () => void {
    const goBacKAnimated = useContext(StackNavigationGoBackAnimatedContext);
    const navigate = useNavigate();

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return goBacKAnimated ?? goBack;
}
