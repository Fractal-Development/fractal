export function chunkArray(currentArray, chunkSize) {
    const results = [];
    while (currentArray.length) {
        results.push(currentArray.splice(0, chunkSize));
    }
    return results;
}
//# sourceMappingURL=chunkArray.js.map