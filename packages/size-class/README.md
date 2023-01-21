# @bma98/size-class

React Native library to handle different sizes inspired on iOS size classes.

## Important Concepts

### Size

There are 4 possible values for a Size(enum).

Compact(phone).
Medium(Half an iPad).
Large(11 inch iPad).
Extra Large(12.9 iPad).

## DeviceType

We use expo-device library to check which kind of device we are interacting with.

### SizeGroup

A SizeGroup is an array of both a Size and a DeviceType.
