import React from 'react';
import { Provider } from 'react-redux'
import './css/App.css';
import {MyHeader} from "./components/MyHeader";
import {LabelAndInput} from "./components/LabelAndInput"
import {MyButton} from "./components/MyButton";
import {MyLabel} from "./components/MyLabel";
import storeFactory from './store'
import {NewName} from "./components/containers";

const store = storeFactory();
window.store = store;

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
        <Provider store={store}>
            <div className="App">
                <MyHeader message={"Random Team Matching"}/>
                <NewName {...InputList[0]} />
                {InputList.map((input, i) => i === 0 ? "" : <LabelAndInput key={i} {...input}/>)}
                {ButtonList.map((button, i) => <MyButton key={i} {...button}/>)}
                <MyLabel className={"result"} text={"result"}/>
            </div>
        </Provider>

    );
}

export default App;
