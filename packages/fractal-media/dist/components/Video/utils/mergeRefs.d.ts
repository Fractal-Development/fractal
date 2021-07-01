import { MutableRefObject, LegacyRef, RefCallback } from 'react';
export declare function mergeRefs<T = any>(refs: Array<MutableRefObject<T> | LegacyRef<T>>): RefCallback<T>;
