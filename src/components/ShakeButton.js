import React from "react"
import "../css/MyButton.css"
import {shake} from "../lib/ArrayHelper";
import {string, array, func, object} from 'prop-types'

export const ShakeButton = ({className, name, clickMethod = f => f, names = [], team = {count: 1, size: 10}}) => {
    const shakeName = () => {
        clickMethod(shake(names, team))
    };
    return <div className={className}>
        <div onClick={shakeName}>{name}</div>
    </div>
};


ShakeButton.propTypes = {
    className: string,
    name: string,
    clickMethod: func,
    names: array,
    team: object
}