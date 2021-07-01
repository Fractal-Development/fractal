export declare function useControllableState<T>(value?: T, defaultValue?: T | (() => T), onChange?: (value: T) => void): [T, (valu: T) => void];
