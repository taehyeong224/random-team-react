import React from 'react';
import './css/App.css';
import {MyHeader} from "./components/MyHeader";
import {LabelAndInput} from "./components/LabelAndInput"
import {MyButton} from "./components/MyButton";

const InputList = [
    {className: "add-name", labelText: "Add Name"},
    {className: "name-list", labelText: "Name List"},
    {className: "team-count", labelText: "Team Count"},
    {className: "size-of-team", labelText: "Size Team"}
];

const ButtonList = [
    {className: "clear", name: "clear", clickMethod: () => console.log("clear")},
    {className: "shake", name: "shake", clickMethod: () => console.log("shake")},
    {className: "again", name: "again", clickMethod: () => console.log("again")},
];

function App() {
    return (
        <div className="App">
            <MyHeader message={"Random Team Matching"}/>
            {InputList.map((input, i) => <LabelAndInput key={i} {...input}/>)}
            {ButtonList.map((button, i) => <MyButton key={i} {...button}/>)}
        </div>
    );
}

export default App;
