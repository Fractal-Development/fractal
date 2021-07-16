import { letterSizes } from './letterSizes';

export function useGetTextHeight(containerWidth: number): (text: string) => number {
    return (text: string) => {
        const newText = text.trimEnd();
        let fullWidth = 0;
        [...newText].forEach((letter) => {
            if (letterSizes[letter] != undefined) {
                fullWidth += letterSizes[letter];
            } else {
                fullWidth += 8.3;
            }
        });
        const numberOfLines = fullWidth / containerWidth;
        return Math.ceil(numberOfLines) * 20.37;
    };
}