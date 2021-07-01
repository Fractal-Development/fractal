import { Platform, UIManager } from 'react-native';
export function startFractalApp() {
    if (Platform.OS === 'android') {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
}
//# sourceMappingURL=index.native.js.map