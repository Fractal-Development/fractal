import { useContext } from 'react';
import { ThemeIdentifierContext } from '../ThemeIdentifierContext';
export function useThemeIdentifier() {
    const [identifier] = useContext(ThemeIdentifierContext);
    return identifier;
}
//# sourceMappingURL=useThemeIdentifier.js.map