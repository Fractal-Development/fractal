import { immerable } from 'immer';
import shareDatabaseReference from './shareDatabaseReference';

export class Database<Collections extends object> {
    collections: Collections;

    [immerable] = true;

    constructor(collections: Collections) {
        this.collections = shareDatabaseReference(collections);
    }
}
