import React from "react"
import "../css/MyButton.css"
import {shake} from "../lib/ArrayHelper";

export const ShakeButton = ({className, name, clickMethod = f => f, shuffledList = [], team = {count: 1, size: 10}}) => {
    const shakeName = () => {
        const result = shake(shuffledList, team);
        clickMethod(result)
    } ;
    return <div className={className}>
        <div onClick={shakeName}>{name}</div>
    </div>
};
