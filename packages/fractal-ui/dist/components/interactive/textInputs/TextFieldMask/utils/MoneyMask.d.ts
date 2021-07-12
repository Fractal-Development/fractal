export declare class MoneyMask {
    static getMoneyValue(newValue: string, oldValue: string): string;
    static insertChar(text: string, index: number, char: string): string;
    static getRawValue(maskedValue: string): string;
    static toMask(newValue: string, oldValue: string): {
        maskedText: string;
        rawText: string;
    };
}
