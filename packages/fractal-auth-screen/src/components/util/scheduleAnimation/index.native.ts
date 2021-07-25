import { LayoutAnimation } from 'react-native';

export function scheduleAnimation(): void {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
}
