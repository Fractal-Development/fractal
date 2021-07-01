export declare class PhoneMask {
    static getMaskedValue(value: string): string;
    static getRawValue(maskedValue: string): string;
    static toMask(value: string): {
        maskedText: string;
        rawText: string;
    };
}
