import React, { useState } from "react";
import { useTheme, Box, Button, Text, MiddleCellModal, } from "@bma98/fractal-ui";
export function MiddleCellModalFragment() {
    const { spacings } = useTheme();
    const [middleCellVisible, setMiddleCellVisible] = useState(false);
    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: "title" }, "Middle Cell Modal Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Button, { variant: "main", text: "Show Middle Cell Modal", onPress: toggleMiddleCell }),
            React.createElement(MiddleCellModal, { visible: middleCellVisible, onDismiss: toggleMiddleCell },
                React.createElement(Box, null,
                    React.createElement(Button, { variant: "warning", text: "Dismiss Cell Modal", onPress: toggleMiddleCell }))))));
}
//# sourceMappingURL=MiddleCellModalFragment.js.map