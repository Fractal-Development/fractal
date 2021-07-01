import { Masker } from './Masker';
export class MoneyMask {
    static getMoneyValue(newValue, oldValue) {
        let sanitized = newValue;
        if (sanitized.length == oldValue.length - 1) {
            sanitized = Masker.removeNotNumbers(sanitized);
        }
        const masked = Masker.toMoney(sanitized);
        return masked;
    }
    static insertChar(text, index, char) {
        if (index > 0) {
            return text.substring(0, index) + char + text.substring(index, text.length);
        }
        else {
            return char + text;
        }
    }
    static getRawValue(maskedValue) {
        let normalized = Masker.removeNotNumbers(maskedValue);
        const precision = 2;
        const dotPosition = normalized.length - precision;
        normalized = this.insertChar(normalized, dotPosition, '.');
        return normalized;
    }
    static toMask(newValue, oldValue) {
        const maskedText = this.getMoneyValue(newValue, oldValue);
        const rawText = this.getRawValue(maskedText);
        return { maskedText, rawText };
    }
}
//# sourceMappingURL=MoneyMask.js.map