import { MutableRefObject, useRef, useEffect, Dispatch, SetStateAction } from 'react';

export function useAudioWebEffects(
    audioRef: MutableRefObject<HTMLAudioElement | undefined>,
    audioSrc: string,
    setIsPlaying: Dispatch<SetStateAction<boolean>>,
    setCurrentTime: Dispatch<SetStateAction<number>>,
    setDuration: Dispatch<SetStateAction<number>>,
    checkIfShouldGoToNextTrack: () => void
): void {
    const isReady = useRef(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(audioSrc);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [audioRef, audioSrc, setCurrentTime, setIsPlaying]);

    useEffect(() => {
        const audioCurrentRef = audioRef.current;

        const onLoadedData = (): void => {
            if (audioRef.current) {
                const { duration } = audioRef.current;
                if (!isNaN(duration)) setDuration(duration * 1000);
            }
        };

        const onTimeUpdate = (): void => {
            if (audioRef.current) setCurrentTime(audioRef.current.currentTime * 1000);
        };

        audioCurrentRef?.addEventListener('loadeddata', onLoadedData);
        audioCurrentRef?.addEventListener('timeupdate', onTimeUpdate);

        return () => {
            audioCurrentRef?.pause();
            audioCurrentRef?.removeEventListener('loadeddata', onLoadedData);
            audioCurrentRef?.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [audioRef, audioSrc, setCurrentTime, setDuration, setIsPlaying]);

    useEffect(() => {
        const audioCurrentRef = audioRef.current;
        const onEnded = (): void => {
            checkIfShouldGoToNextTrack();
        };
        audioCurrentRef?.addEventListener('ended', onEnded);

        return () => {
            audioCurrentRef?.removeEventListener('ended', onEnded);
        };
    }, [audioRef, checkIfShouldGoToNextTrack]);
}
