# @bma98/fractal-ui

## Description

UI Components easy to customize for apps made by Fractal.

### Installation

yarn add @bma98/fractal-ui

### Peer Dependencies

Depending on the platforms that you want to support, we have different peer-dependencies that you should install for `fractal-ui` to work as expected. We are aware that we might be using too many dependencies for some people's taste, but the thing is that most of our projects were using this before hand already, and we are trying to reduce the need of configuration so we are adding this by default.

We have other dependencies that are used by all platforms so we manage that automatically.

#### Expo(Web, iOS and Android)

```
"@react-native-community/datetimepicker": "^3.5.2",
"@react-native-community/slider": "^3.0.3",
"@react-native-picker/picker": "^1.16.3",
"expo-blur": "^9.0.3",
"expo-document-picker": "^9.1.2",
"react": "16.13.1",
"react-native": "~0.63.4",
"react-native-reanimated": "~2.1.0",
"react-native-svg": "12.3.0",
"react-virtualized-auto-sizer": "^1.0.5"
```

#### React Native(iOS and Android only)

```
"@react-native-community/datetimepicker": "^3.5.2",
"@react-native-community/slider": "^3.0.3",
"@react-native-picker/picker": "^1.16.3",
"expo-blur": "^9.0.3",
"expo-document-picker": "^9.1.2",
"react": "16.13.1",
"react-native": "~0.63.4",
"react-native-reanimated": "~2.1.0",
"react-native-svg": "^12.3.0"
```

#### React.JS or Next.JS(Web only)

```
"react": "16.13.1",
"react-virtualized-auto-sizer": "^1.0.5"
```

### Is there more configuration needed?

For Expo/React Native no, and depending on your set up for React.JS or Next.JS you might need to transpile our modules too, check out our examples in this same repo to see a small project using `fractal-ui`.

### Is it a problem if we do not use the exact same React version?

Most of the time no, we are only using this version as is the one that Expo supports, but you should be fine using any other version of React as long as it is backwards compatible.
