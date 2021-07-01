export function chunkArray<T>(currentArray: Array<T>, chunkSize: number): Array<Array<T>> {
    const results: Array<Array<T>> = [];

    while (currentArray.length) {
        results.push(currentArray.splice(0, chunkSize));
    }

    return results;
}
