import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface SocialMediaButtonsEventsProps {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    googleLoading?: boolean;
    facebookLoading?: boolean;
    appleLoading?: boolean;
    appleText?: string;
    removeAppleButton?: boolean;
}
export interface SocialMediaButtonsProps extends Partial<Omit<LayerProps, 'children'>>, SocialMediaButtonsEventsProps {
}
declare const SocialMediaButtons: React.ForwardRefExoticComponent<SocialMediaButtonsProps & React.RefAttributes<unknown>>;
export { SocialMediaButtons };
