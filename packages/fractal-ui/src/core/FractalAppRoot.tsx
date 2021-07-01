import React, { useEffect } from 'react';
import { ThemeIdentifierProvider } from '../context/ThemeIdentifierContext';
import { ThemeContent, ThemeContentProps } from '../components/ThemeContent';
import { startFractalApp } from '../executionEnvironment';

export type FractalAppRootProps = ThemeContentProps;

export function FractalAppRoot(props: FractalAppRootProps): JSX.Element {
    const { handleThemeManually = false } = props;

    useEffect(() => {
        startFractalApp();
    }, []);

    return (
        <ThemeIdentifierProvider handleThemeManually={handleThemeManually}>
            <ThemeContent {...props} />
        </ThemeIdentifierProvider>
    );
}
