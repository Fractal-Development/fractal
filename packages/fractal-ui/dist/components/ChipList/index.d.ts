import { IDEnabled } from '../textInputs/AutoComplete/types';
interface ChipListProps<T> {
    data: Array<T>;
    getLabel: (item: T) => string;
    onItemPress: (item: T) => void;
}
export declare function ChipList<T extends IDEnabled>({ data, getLabel, onItemPress }: ChipListProps<T>): JSX.Element;
export {};
