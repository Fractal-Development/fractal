import React from 'react';
import { ButtonTextFieldProps } from './ButtonTextField';
export interface SearchBarProps extends ButtonTextFieldProps {
    onSearch?: (query: string) => void;
    enableSearchButton?: boolean;
    ariaLabel?: string;
}
declare const SearchBar: React.ForwardRefExoticComponent<Pick<SearchBarProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "focusable" | "from" | "opacity" | "overflow" | "pointerEvents" | "animate" | "placeholder" | "value" | "borderRadius" | "backgroundColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "exit" | "transition" | "variants" | "currentVariant" | "onLayout" | "ariaLabel" | "onChangeText" | "onSubmitEditing" | "leftImage" | "rightImage" | "textFieldProps" | "inputRef" | "onButtonPress" | "buttonImage" | "buttonVariant" | "buttonText" | "buttonAriaLabel" | "showButton" | "useForegroundVariant" | "onSearch" | "enableSearchButton"> & React.RefAttributes<unknown>>;
export { SearchBar };
