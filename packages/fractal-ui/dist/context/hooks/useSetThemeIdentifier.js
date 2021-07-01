import { useContext } from 'react';
import { ThemeIdentifierContext } from '../ThemeIdentifierContext';
export function useSetThemeIdentifier() {
    const [, setIdentifier] = useContext(ThemeIdentifierContext);
    return setIdentifier;
}
//# sourceMappingURL=useSetThemeIdentifier.js.map