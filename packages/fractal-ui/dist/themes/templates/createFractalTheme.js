import { lightFractalTheme } from './lightFractalTheme';
export function createFractalTheme(properties, baseTheme = lightFractalTheme) {
    const newTheme = JSON.parse(JSON.stringify(baseTheme));
    const keys = Object.keys(baseTheme);
    keys.forEach((key) => {
        Object.assign(newTheme[key], properties[key]);
    });
    return newTheme;
}
//# sourceMappingURL=createFractalTheme.js.map