import React from "react"
import "../css/ShuffleList.css"
import {array} from "prop-types"

export const ShuffleList = ({shuffleList = []}) => {
    const getRandomStyle = () => {
        return {
            borderRadius: "30px",
            textAlign: "center",
            lineHeight: "20px",
            color: "rgb(255, 255, 255)",
            fontSize: "12px",
            boxShadow: "none",
            backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        }
    };

    return <div className={"shuffle-list"}>
        {shuffleList.map((team, i) => {
                return <div key={i}>
                    <div style={getRandomStyle()} key={i}>team {i + 1}</div>
                    {team.map((name, j) => <li key={j}>{name}</li>)}
                </div>
            }
        )}
        <br/>
    </div>
}

ShuffleList.propTypes = {
    shuffleList: array
}