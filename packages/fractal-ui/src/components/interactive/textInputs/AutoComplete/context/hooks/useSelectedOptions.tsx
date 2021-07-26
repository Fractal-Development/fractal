import { useContext } from 'react';
import { SelectedOptionsContext } from '../SelectedOptionsContext';

export function useSelectedOptions(): [Array<unknown>, (value: Array<unknown>) => void] {
    const handleState = useContext(SelectedOptionsContext);
    return handleState;
}
