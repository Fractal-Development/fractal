import { SizeType } from '../../types';

export function getWebPhoneSizeType(key: string, value: boolean): SizeType | undefined {
    if (key === 'largePhone' && value) {
        // Landscape, you can show more content
        return SizeType.medium;
    }

    return undefined;
}
