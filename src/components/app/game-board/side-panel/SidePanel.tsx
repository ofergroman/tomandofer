import React from "react";
import TurnManager from "./turn manager/TurnManager.tsx";
import {ChildProps} from "../../../types";


function SidePanel({className}: ChildProps): React.JSX.Element {
    return (<div className={className}>
        <TurnManager></TurnManager>
    </div>)
}

export default SidePanel;
