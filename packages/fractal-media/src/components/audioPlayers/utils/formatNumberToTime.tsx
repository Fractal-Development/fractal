function strPadLeft(string: number, pad: string, length: number): string {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}

export function formatNumberToTime(totalMilliSeconds: number): string {
    if (totalMilliSeconds < 0) {
        return '00:00';
    }
    let totalSeconds = totalMilliSeconds / 1000;
    totalSeconds = Number(totalSeconds.toFixed(0));
    const minutes = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds - minutes * 60;

    return minutes + ':' + strPadLeft(secondsLeft, '0', 2);
}
