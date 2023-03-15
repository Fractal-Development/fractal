import { CollectionReference, IDEnabled } from '.';

export interface ReferenceHolder extends IDEnabled {
    setReference: (reference: CollectionReference) => ReferenceHolder;
}

export function isReferenceHolder(value: unknown): value is ReferenceHolder {
    const casted = value as ReferenceHolder;
    return casted.setReference !== undefined;
}
