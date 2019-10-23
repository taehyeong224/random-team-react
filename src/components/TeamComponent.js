import React from "react"
import "../css/MyButton.css"

export const TeamComponent = ({team = {count: 1, size: 10}, onChange = f=>f}) => {
    let count;
    let size;
    const changed = () => {
        onChange({
            team: {
                count: Number(count.value),
                size: Number(size.value)
            }
        })
    };
    return <div>
        <div className={"team-count"}>
            <div className="background">
                <div className={"label"}>Team Count</div>
            </div>
            <input type={"text"} ref={input => count = input} onChange={changed} defaultValue={team.count}/>
        </div>
        <div className={"size-of-team"}>
            <div className="background">
                <div className={"label"}>Size Team</div>
            </div>
            <input type={"text"} ref={input => size = input} onChange={changed} defaultValue={team.size}/>
        </div>
    </div>
}
