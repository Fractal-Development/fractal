import { useContext } from 'react';

import { SelectedOptionsContext } from '../SelectedOptionsContext';

export function useSelectedOptions(): [unknown[], (value: unknown[]) => void] {
    const handleState = useContext(SelectedOptionsContext);
    return handleState;
}
