import React from "react"
import "../css/MyButton.css"
import {string, func} from 'prop-types'

export const MyButton = ({className, name, clickMethod = f => f}) =>
    <div className={className}>
        <div onClick={clickMethod}>{name}</div>
    </div>


MyButton.propTypes = {
    className: string,
    name: string,
    clickMethod: func
};

MyButton.defaultProps = {
    className: "",
    name: "",
    clickMethod: f => f
};
