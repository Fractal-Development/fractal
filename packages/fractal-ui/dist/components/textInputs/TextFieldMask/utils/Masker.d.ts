interface MoneyOptions {
    delimiter: string;
    lastOutput?: string;
    precision: number;
    separator: string;
    showSignal?: boolean;
    suffixUnit: string;
    unit: string;
    zeroCents?: boolean;
    moneyPrecision: number;
}
interface PatternOptions {
    pattern: string;
    placeholder: string;
}
export declare class Masker {
    static mergeMoneyOptions(opts?: Partial<MoneyOptions>): MoneyOptions;
    static toMoney(value: string, moneyOptions?: MoneyOptions): string;
    static addPlaceholdersToOutput(output: string[], initialIndex: number, placeholder: string): string[];
    static toPattern(value: string, patternOptions: PatternOptions | string): string;
    static toNumber(value: string): string;
    static toAlphaNumeric(value: string): string;
    static removeNotNumbers(text: string): string;
}
export {};
