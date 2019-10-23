import React from "react"

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
