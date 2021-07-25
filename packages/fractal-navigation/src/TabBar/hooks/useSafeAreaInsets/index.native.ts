import { useSafeAreaInsets as useSafeAreaInsetsContext } from 'react-native-safe-area-context';
import { EdgeInsets } from '../../types/EdgeInsets';

export function useSafeAreaInsets(): EdgeInsets {
    return useSafeAreaInsetsContext();
}
