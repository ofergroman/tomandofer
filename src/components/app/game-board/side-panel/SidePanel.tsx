import React from "react";
import TurnManager from "./turn manager/TurnManager.tsx";

export type SidePanelProps = ChildProps & { game: Game}
function SidePanel({className}: SidePanelProps): React.JSX.Element {
    return (<div className={className}>
        <TurnManager></TurnManager>
    </div>)
}

export default SidePanel;
