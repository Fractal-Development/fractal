import { useContext } from 'react';
import { StackNavigationGoBackAnimatedContext } from '../context/StackNavigationGoBackAnimatedProvider';
import { useHistory } from 'react-router-native';

export function useGoBackAnimated(): () => void {
    const goBacKAnimated = useContext(StackNavigationGoBackAnimatedContext);
    const { goBack } = useHistory();

    return goBacKAnimated ?? goBack;
}
