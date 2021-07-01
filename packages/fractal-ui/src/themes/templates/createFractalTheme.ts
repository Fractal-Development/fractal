import { DeepPartial } from 'utility-types';
import { FractalTheme } from '../FractalTheme';
import { lightFractalTheme } from './lightFractalTheme';

export function createFractalTheme(properties: DeepPartial<FractalTheme>, baseTheme: FractalTheme = lightFractalTheme): FractalTheme {
    const newTheme = JSON.parse(JSON.stringify(baseTheme));
    const keys = Object.keys(baseTheme);
    keys.forEach((key) => {
        Object.assign(newTheme[key], properties[key]);
    });
    return newTheme;
}
