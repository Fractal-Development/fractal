import { SizeGroup } from '../types';
import { useSizeGroup } from './useSizeGroup';

export function useWidthSizeGroup(): SizeGroup {
    return useSizeGroup('width');
}
