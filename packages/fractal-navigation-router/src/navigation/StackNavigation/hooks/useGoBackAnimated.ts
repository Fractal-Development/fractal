import { useContext } from 'react';
import { StackNavigationGoBackAnimatedContext } from '../context/StackNavigationGoBackAnimatedProvider';

export function useGoBackAnimated(): () => void {
    return useContext(StackNavigationGoBackAnimatedContext)[1];
}
