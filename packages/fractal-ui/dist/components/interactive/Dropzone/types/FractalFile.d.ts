export interface NativeFileInfo {
    type: string;
    size: number | undefined;
    name: string;
    uri: string;
}
export declare function isNativeFileInfo(value: unknown): value is NativeFileInfo;
export declare type FractalFile = File | NativeFileInfo;
