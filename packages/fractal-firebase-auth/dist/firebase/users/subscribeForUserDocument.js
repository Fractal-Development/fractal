export function subscribeForUserDocument(database, id, onFetchDone) {
    return database.collections.users.subscribeToDocument(id, (newDocument) => {
        if (onFetchDone) {
            onFetchDone(newDocument);
        }
    }, (error) => {
        alert(error.message);
    }, () => {
        if (onFetchDone) {
            onFetchDone();
        }
    });
}
//# sourceMappingURL=subscribeForUserDocument.js.map