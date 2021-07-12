import { Masker } from './Masker';
const PHONE_MASK = '999 999 9999';
// 999 999 9999
export class PhoneMask {
    static getMaskedValue(value) {
        const cleanedValue = Masker.removeNotNumbers(value);
        return Masker.toPattern(cleanedValue, PHONE_MASK);
    }
    static getRawValue(maskedValue) {
        return Masker.removeNotNumbers(maskedValue);
    }
    static toMask(value) {
        const maskedText = this.getMaskedValue(value);
        const rawText = this.getRawValue(maskedText);
        return { maskedText, rawText };
    }
}
//# sourceMappingURL=PhoneMask.js.map