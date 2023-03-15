import { SizeGroup } from '../types';
import { useSizeGroup } from './useSizeGroup';

export function useHeightSizeGroup(): SizeGroup {
    return useSizeGroup('height');
}
