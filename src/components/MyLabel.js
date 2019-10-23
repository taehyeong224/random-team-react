import React from "react"
import "../css/Label.css"
import {string, array} from "prop-types";

export const MyLabel = ({className, text, names = []}) =>
    <div className={className}>
        <div>{names.length === 0 ? text : `${names.length} people`}</div>
    </div>

MyLabel.propTypes = {
    className: string,
    text: string,
    names: array
}