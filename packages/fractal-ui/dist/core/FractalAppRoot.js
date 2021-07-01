import React, { useEffect } from 'react';
import { ThemeIdentifierProvider } from '../context/ThemeIdentifierContext';
import { ThemeContent } from '../components/ThemeContent';
import { startFractalApp } from '../executionEnvironment';
export function FractalAppRoot(props) {
    const { handleThemeManually = false } = props;
    useEffect(() => {
        startFractalApp();
    }, []);
    return (React.createElement(ThemeIdentifierProvider, { handleThemeManually: handleThemeManually },
        React.createElement(ThemeContent, Object.assign({}, props))));
}
//# sourceMappingURL=FractalAppRoot.js.map