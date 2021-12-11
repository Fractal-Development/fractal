import { useCallback } from 'react';
import { letterSizes } from './letterSizes';

export function useGetTextHeight(containerWidth: number): (text: string) => number {
    return useCallback(
        (text: string) => {
            const newText = text.trimEnd();
            let fullWidth = 0;
            [...newText].forEach((letter) => {
                if (letterSizes[letter] != null) {
                    fullWidth += letterSizes[letter];
                } else {
                    fullWidth += 8.3;
                }
            });
            const numberOfLines = fullWidth / containerWidth;
            return Math.ceil(numberOfLines) * 20.37;
        },
        [containerWidth]
    );
}
