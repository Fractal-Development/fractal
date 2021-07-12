export function isAcceptedFileType(acceptedTypes: Array<string>, fileType: string): boolean {
    return acceptedTypes.includes(fileType);
}
