import { Masker } from './Masker';

export class MoneyMask {
    static getMoneyValue(newValue: string, oldValue: string): string {
        let sanitized = newValue;
        if (sanitized.length == oldValue.length - 1) {
            sanitized = Masker.removeNotNumbers(sanitized);
        }
        const masked = Masker.toMoney(sanitized);

        return masked;
    }

    static insertChar(text: string, index: number, char: string): string {
        if (index > 0) {
            return text.substring(0, index) + char + text.substring(index, text.length);
        } else {
            return char + text;
        }
    }

    static getRawValue(maskedValue: string): string {
        let normalized = Masker.removeNotNumbers(maskedValue);
        const precision = 2;

        const dotPosition = normalized.length - precision;
        normalized = this.insertChar(normalized, dotPosition, '.');

        return normalized;
    }

    static toMask(newValue: string, oldValue: string): { maskedText: string; rawText: string } {
        const maskedText = this.getMoneyValue(newValue, oldValue);
        const rawText = this.getRawValue(maskedText);
        return { maskedText, rawText };
    }
}
