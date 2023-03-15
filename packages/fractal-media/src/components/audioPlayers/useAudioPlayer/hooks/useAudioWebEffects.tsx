import { MutableRefObject, useEffect, Dispatch, SetStateAction, useRef } from 'react';

export function useAudioWebEffects(
    audioRef: MutableRefObject<HTMLAudioElement | undefined>,
    audioSrc: string,
    trackIndex: number,
    setIsPlaying: Dispatch<SetStateAction<boolean>>,
    setCurrentTime: Dispatch<SetStateAction<number>>,
    setDuration: Dispatch<SetStateAction<number>>,
    checkIfShouldGoToNextTrack: () => void
): void {
    const previusTrackIndex = useRef<number>(trackIndex);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(audioSrc);
        } else if (previusTrackIndex.current !== trackIndex) {
            audioRef.current = new Audio(audioSrc);
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
            previusTrackIndex.current = trackIndex;
        }
    }, [audioRef, audioSrc, setCurrentTime, setIsPlaying, trackIndex]);

    useEffect(() => {
        const audioCurrentRef = audioRef.current;

        const onLoadedData = (): void => {
            if (audioRef.current) {
                const { duration } = audioRef.current;
                if (!Number.isNaN(duration)) {
                    setDuration(duration * 1000);
                }
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
