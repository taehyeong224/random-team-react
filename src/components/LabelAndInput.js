import React from "react"
import {string, func} from 'prop-types'

export const LabelAndInput = ({className, labelText, clickMethod = f => f}) => {
    let inputText = React.createRef();
    const handle = () => {
        clickMethod(inputText.value)
    };
    return <div className={className}>
        <div className="background">
            <div className={"label"} onClick={handle}>{labelText}</div>
        </div>
        <input type={"text"} ref={input => inputText = input}/>
    </div>
}

LabelAndInput.propTypes = {
    className: string,
    labelText: string,
    clickMethod: func
};

LabelAndInput.defaultProps = {
    className: "",
    labelText: "",
    clickMethod: f => f
};