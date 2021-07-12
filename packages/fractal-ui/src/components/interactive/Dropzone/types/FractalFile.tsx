export interface NativeFileInfo {
    type: string;
    size: number;
    name: string;
    uri: string;
}

export function isNativeFileInfo(value: unknown): value is NativeFileInfo {
    const casted = value as NativeFileInfo;
    return casted.uri != null;
}

export type FractalFile = File | NativeFileInfo;
