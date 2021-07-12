export function getInitialPickerIndex(initialValue: string | undefined, items: Array<[string, string]>): number {
    return items.findIndex((pair) => pair[0] === initialValue);
}
