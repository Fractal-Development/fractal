import React from 'react';
import { ButtonTextFieldProps } from './ButtonTextField';
export interface SearchBarProps extends ButtonTextFieldProps {
    onSearch?: (query: string) => void;
    enableSearchButton?: boolean;
    ariaLabel?: string;
}
declare const SearchBar: React.ForwardRefExoticComponent<Pick<SearchBarProps, "from" | "custom" | "onExitComplete" | "exitBeforeEnter" | "presenceAffectsLayout" | "currentVariant" | "animate" | "transition" | "style" | "onLayout" | "backgroundColor" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "padding" | "paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft" | "margin" | "marginTop" | "marginBottom" | "marginRight" | "marginLeft" | "flex" | "display" | "flexDirection" | "justifyContent" | "alignItems" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "boxShadow" | "className" | "pointerEvents" | "cursor" | "boxSizing" | "focusable" | "exit" | "variants" | "placeholder" | "ariaLabel" | "value" | "buttonImage" | "onChangeText" | "onButtonPress" | "buttonVariant" | "buttonText" | "showButton" | "buttonAriaLabel" | "leftImage" | "rightImage" | "textFieldProps" | "inputRef" | "onSubmitEditing" | "useForegroundVariant" | "onSearch" | "enableSearchButton"> & React.RefAttributes<unknown>>;
export { SearchBar };
