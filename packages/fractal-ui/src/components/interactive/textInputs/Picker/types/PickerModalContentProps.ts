export interface PickerModalContentProps {
    onFinalIndexChange: (index: number) => void;
    items: [string, string][];
    onChange?: (pair: [string, string]) => void;
    iosDoneText?: string;
    defaultValue?: string;
    value?: string;
}
