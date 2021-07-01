export interface PlayPauseButtonProps {
    isPlaying: boolean;
    onPress: () => void;
}
export declare function PlayPauseButton({ onPress, isPlaying }: PlayPauseButtonProps): JSX.Element;
