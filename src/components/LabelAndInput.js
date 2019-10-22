import React from "react"

export const LabelAndInput = ({className, labelText}) =>
    <div className={className}>
        <div className="background">
            <div className={"label"}>{labelText}</div>
        </div>
        <input type={"text"}/>
    </div>