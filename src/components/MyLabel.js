import React from "react"
import "../css/Label.css"

export const MyLabel = ({className, text}) =>
    <div className={className}>
        <div>{text}</div>
    </div>