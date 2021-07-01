import { Masker } from './Masker';

const PHONE_MASK = '999 999 9999';

// 999 999 9999

export class PhoneMask {
    static getMaskedValue(value: string): string {
        const cleanedValue = Masker.removeNotNumbers(value);
        return Masker.toPattern(cleanedValue, PHONE_MASK);
    }

    static getRawValue(maskedValue: string): string {
        return Masker.removeNotNumbers(maskedValue);
    }

    static toMask(value: string): { maskedText: string; rawText: string } {
        const maskedText = this.getMaskedValue(value);
        const rawText = this.getRawValue(maskedText);
        return { maskedText, rawText };
    }
}
