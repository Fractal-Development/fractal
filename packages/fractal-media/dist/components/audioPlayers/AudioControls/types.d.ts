export interface AudioControlsProps {
    isEnableShuffle: boolean;
    isEnableRepeat: boolean;
    isPlaying: boolean;
    onPlayPausePress: () => void;
    onPreviousPress: () => void;
    onNextPress: () => void;
    onShufflePress: () => void;
    onRepeatPress: () => void;
}
export interface ControlButtonProps {
    onPress: () => void;
    variant: 'previous' | 'next';
}
export interface ControlToggleButtonProps {
    active: boolean;
    onPress: () => void;
    variant: 'shuffle' | 'repeat';
}
