import { useEffect } from 'react';
import { useTheme } from '../context/hooks/useTheme';
export function WebBackground() {
    const { colors } = useTheme();
    useEffect(() => {
        document.body.style.backgroundColor = colors.background;
    }, [colors.background]);
    return null;
}
//# sourceMappingURL=WebBackground.js.map