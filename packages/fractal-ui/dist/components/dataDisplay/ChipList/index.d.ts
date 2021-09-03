import { IDEnabled } from '../../interactive/textInputs/AutoComplete/types';
import { LayerProps } from '../..';
interface ChipListProps<T> extends LayerProps {
    data: Array<T>;
    getLabel: (item: T) => string;
    onItemPress: (item: T) => void;
}
export declare function ChipList<T extends IDEnabled>({ data, getLabel, onItemPress, ...others }: ChipListProps<T>): JSX.Element;
export {};
