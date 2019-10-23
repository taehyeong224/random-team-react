import React from "react"
import "../css/MyButton.css"

export const MyButton = ({className, name, clickMethod = f => f}) =>
    <div className={className}>
        <div onClick={clickMethod}>{name}</div>
    </div>
