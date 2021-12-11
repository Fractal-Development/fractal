import { useContext } from 'react';
import { EdgeInsets } from '../../types';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';

export function useNavigationBarInsets(): EdgeInsets {
    return useContext(NavigationBarInsetsContext)[0];
}
