import React from "react"
import "../css/Label.css"

export const MyLabel = ({className, text, names = []}) =>
    <div className={className}>
        <div>{names.length === 0 ? text: `${names.length} people`}</div>
    </div>