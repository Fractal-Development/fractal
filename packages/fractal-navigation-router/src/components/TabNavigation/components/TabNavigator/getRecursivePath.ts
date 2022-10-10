export function getRecursivePath(path: string): string {
    const hasFinalSlash = path[path.length - 1] === '/';
    return `${path}${hasFinalSlash ? '' : '/'}*`;
}
