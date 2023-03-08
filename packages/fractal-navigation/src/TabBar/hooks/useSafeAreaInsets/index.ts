import { useContext } from 'react';
import { EdgeInsets } from '../../../types/EdgeInsets';
import { SafeAreaInsetsContext } from '../../context/SafeAreaInsetsContext';

export function useSafeAreaInsets(): EdgeInsets {
    return useContext(SafeAreaInsetsContext);
}
