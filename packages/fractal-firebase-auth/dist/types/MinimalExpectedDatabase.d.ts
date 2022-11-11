import { Database, Collection } from '@bma98/firebase-db-manager';
import { MinimalUserData } from './MinimalUser';
declare type UsersCollection<T extends MinimalUserData, S> = Collection<T, S>;
export declare type MinimalExpectedDatabase<T extends MinimalUserData, S> = Database<{
    users: UsersCollection<T, S>;
}>;
export declare function isMinimalExpectedDatabase<T extends MinimalUserData, S>(value: unknown): value is MinimalExpectedDatabase<T, S>;
export {};
