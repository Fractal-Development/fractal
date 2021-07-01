import { useRef, useEffect } from 'react';
export function useAudioWebEffects(audioRef, audioSrc, setIsPlaying, setCurrentTime, setDuration, checkIfShouldGoToNextTrack) {
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
        }
        else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [audioRef, audioSrc, setCurrentTime, setIsPlaying]);
    useEffect(() => {
        const audioCurrentRef = audioRef.current;
        const onLoadedData = () => {
            if (audioRef.current) {
                const { duration } = audioRef.current;
                if (!isNaN(duration))
                    setDuration(duration * 1000);
            }
        };
        const onTimeUpdate = () => {
            if (audioRef.current)
                setCurrentTime(audioRef.current.currentTime * 1000);
        };
        audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.addEventListener('loadeddata', onLoadedData);
        audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.addEventListener('timeupdate', onTimeUpdate);
        return () => {
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.pause();
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.removeEventListener('loadeddata', onLoadedData);
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [audioRef, audioSrc, setCurrentTime, setDuration, setIsPlaying]);
    useEffect(() => {
        const audioCurrentRef = audioRef.current;
        const onEnded = () => {
            checkIfShouldGoToNextTrack();
        };
        audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.addEventListener('ended', onEnded);
        return () => {
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.removeEventListener('ended', onEnded);
        };
    }, [audioRef, checkIfShouldGoToNextTrack]);
}
//# sourceMappingURL=useAudioWebEffects.js.map