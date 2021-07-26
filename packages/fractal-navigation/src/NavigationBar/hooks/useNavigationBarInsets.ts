import { EdgeInsets } from '../../types';
import { useContext } from 'react';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';

export function useNavigationBarInsets(): EdgeInsets {
    return useContext(NavigationBarInsetsContext)[0];
}
