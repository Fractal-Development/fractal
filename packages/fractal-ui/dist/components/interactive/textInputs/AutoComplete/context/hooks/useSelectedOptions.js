import { useContext } from 'react';
import { SelectedOptionsContext } from '../SelectedOptionsContext';
export function useSelectedOptions() {
    const handleState = useContext(SelectedOptionsContext);
    return handleState;
}
//# sourceMappingURL=useSelectedOptions.js.map