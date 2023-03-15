import { Draft } from 'immer';

export function assignPropertiesToObject<T extends object>(draft: Draft<T>, dataToAssign: Partial<T>, assignNullable = false): void {
    Object.keys(draft).forEach((key) => {
        const propertyName = key as keyof T;
        const value = (dataToAssign as T)[propertyName];
        if (value != null || assignNullable) {
            (draft as T)[propertyName] = value;
        }
    });
}
