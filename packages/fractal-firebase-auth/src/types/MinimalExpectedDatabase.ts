import { Database, Collection } from '@bma98/firebase-db-manager';
import { MinimalUserData } from './MinimalUser';

type UsersCollection<T extends MinimalUserData, S> = Collection<T, S>;
export type MinimalExpectedDatabase<T extends MinimalUserData, S> = Database<{ users: UsersCollection<T, S> }>;

export function isMinimalExpectedDatabase<T extends MinimalUserData, S>(value: unknown): value is MinimalExpectedDatabase<T, S> {
    const casted = value as MinimalExpectedDatabase<T, S>;
    return casted.collections.users != null;
}
