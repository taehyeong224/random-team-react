import React from "react"
import "../css/ShuffleList.css"

export const ShuffleList = ({shuffleList = []}) =>
    <div className={"shuffle-list"}>
        {shuffleList.map((team, i) =>
            <div key={i}>team {i + 1} {team.map((name, j) => <li key={j}>{name}</li>)}</div>
        )}
        <br/>
    </div>