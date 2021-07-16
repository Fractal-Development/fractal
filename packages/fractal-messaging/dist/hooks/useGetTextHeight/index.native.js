import { letterSizes } from './letterSizes';
export function useGetTextHeight(containerWidth) {
    return (text) => {
        const newText = text.trimEnd();
        let fullWidth = 0;
        [...newText].forEach((letter) => {
            if (letterSizes[letter] != undefined) {
                fullWidth += letterSizes[letter];
            }
            else {
                fullWidth += 8.3;
            }
        });
        const numberOfLines = fullWidth / containerWidth;
        return Math.ceil(numberOfLines) * 20.37;
    };
}
//# sourceMappingURL=index.native.js.map