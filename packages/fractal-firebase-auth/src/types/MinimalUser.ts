import { Document, IDEnabled } from '@fractal-software/firebase-db-manager';

export interface MinimalUserData extends IDEnabled {
    email: string;
}

export function isMinimalUserData(value: unknown): value is MinimalUserData {
    const castedValue = value as MinimalUserData;
    return castedValue.email != null;
}

export type MinimalUser<T extends MinimalUserData, S> = Document<T, S>;
