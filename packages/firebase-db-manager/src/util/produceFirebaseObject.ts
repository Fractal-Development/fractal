import produce, { Draft } from 'immer';
import { assignPropertiesToObject } from './assignPropertiesToObject';

export function produceFirebaseObject<T extends object>(
    originalObject: T,
    dataToAssign: Partial<T>,
    assignNullable?: boolean,
    callback?: (draft: Draft<T>) => void
): T {
    return produce<T>(originalObject, (draft) => {
        callback?.(draft);
        return assignPropertiesToObject(draft, dataToAssign, assignNullable);
    });
}
