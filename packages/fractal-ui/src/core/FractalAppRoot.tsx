import React, { useEffect } from 'react';
import { ToastProvider } from '../components/overlays/toast/ToastProvider';

import { ThemeContent, ThemeContentProps } from '../components/ThemeContent';
import { AlertProvider } from '../context/AlertContext';
import { ThemeIdentifierProvider } from '../context/ThemeIdentifierContext';
import { startFractalApp } from '../executionEnvironment';

export type FractalAppRootProps = ThemeContentProps & {
    handleThemeManually?: boolean;
};

export function FractalAppRoot({ children, handleThemeManually = false, lightTheme, darkTheme }: FractalAppRootProps): JSX.Element {
    useEffect(() => {
        startFractalApp();
    }, []);

    return (
        <ThemeIdentifierProvider handleThemeManually={handleThemeManually}>
            <ThemeContent lightTheme={lightTheme} darkTheme={darkTheme}>
                <AlertProvider>
                    <ToastProvider>{children}</ToastProvider>
                </AlertProvider>
            </ThemeContent>
        </ThemeIdentifierProvider>
    );
}
