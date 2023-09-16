import { useEffect, useState } from 'react';
import { ColorSchemeName, ColorSchemeSystem } from './types';

function getInitialTheme(): ColorSchemeName {
    if (typeof window !== 'undefined') {
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }
    return 'dark';
}

export function useColorScheme(): {
    colorScheme: ColorSchemeName;
    setColorScheme: (colorSchemeSystem: ColorSchemeSystem) => void;
    toggleColorScheme: () => void;
} {
    const [colorSchemeSource, setColorSchemeSource] = useState<'system' | undefined>(undefined);
    const [colorScheme, setColorScheme] = useState<ColorSchemeName>(getInitialTheme());

    useEffect(() => {
        if (window === undefined) return;
        const root = window.document.documentElement;
        root.classList.remove(colorScheme === 'dark' ? 'light' : 'dark');
        root.classList.add(colorScheme);
    }, [colorScheme]);

    useEffect(() => {
        if (colorSchemeSource === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const handler = () => {
                if (mediaQuery.matches) {
                    return setColorScheme('dark');
                } else {
                    return setColorScheme('light');
                }
            };
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        }
        return () => {};
    }, [colorSchemeSource]);

    const setColorSchemeSystem = (colorSchemeSystem: ColorSchemeSystem) => {
        if (colorSchemeSystem === 'system') {
            setColorSchemeSource('system');
        } else {
            setColorScheme(colorSchemeSystem);
        }
    };

    const toggleColorScheme = () => {
        setColorScheme((currentColorScheme) => (currentColorScheme === 'dark' ? 'light' : 'dark'));
    };

    return {
        colorScheme,
        setColorScheme: setColorSchemeSystem,
        toggleColorScheme
    };
}
