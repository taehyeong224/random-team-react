import React from "react"
import {string, array} from 'prop-types'

export const NameList = ({className, labelText, names}) => {
    return <div className={className}>
        <div className="background">
            <div className={"label"}>{labelText}</div>
        </div>
        <input type={"text"} value={names.map((name) => name.name).join()} readOnly={true}/>
    </div>
}


NameList.propTypes = {
    className: string,
    labelText: string,
    names: array
}