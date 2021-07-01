export function shuffleArray<T>(initialArray: Array<T>): Array<T> {
    const [...array] = initialArray;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function shufflePlayList<T>(initialPlayList: Array<T>, currentIndex: number): Array<T> {
    const firstPart = initialPlayList.slice(0, currentIndex + 1);
    const secondPart = initialPlayList.slice(currentIndex + 1);
    const suffleSecondPart = shuffleArray(secondPart);
    return [...firstPart, ...suffleSecondPart];
}
