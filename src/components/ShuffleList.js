import React from "react"
import "../css/ShuffleList.css"

export const ShuffleList = ({shuffleList = []}) => {
    const resultStyle = {
        borderRadius: "30px",
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(255, 255, 255)",
        fontSize: "12px",
        boxShadow: "none"
    };
    return <div className={"shuffle-list"}>
        {shuffleList.map((team, i) => {
                return <div key={i}>
                    <div style={{...resultStyle, ...{backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`}}} key={i}>team {i + 1}</div>
                    {team.map((name, j) => <li key={j}>{name}</li>)}
                </div>
            }
        )}
        <br/>
    </div>
}
