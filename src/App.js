import React from 'react';
import {Provider} from 'react-redux'
import './css/App.css';
import {MyHeader} from "./components/MyHeader";
import {MyLabel} from "./components/MyLabel";
import storeFactory from './store'
import {
    ClearName,
    NewName,
    ShakeName,
    ShowNameCount,
    ShowNameList,
    ShowShuffleList,
    TeamSetting
} from "./components/containers";

const store = storeFactory();
window.store = store;

const ButtonList = [
    {className: "clear", name: "clear"},
    {className: "shake", name: "shake"},
    {className: "again", name: "again"},
];

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MyHeader message={"Random Team Matching"}/>
                <NewName className="add-name" labelText="Add Name" />
                <ShowNameList className="name-list" labelText="Name List"/>
                <TeamSetting/>
                <ClearName {...ButtonList[0]}/>
                <ShakeName {...ButtonList[1]}/>
                <ShakeName {...ButtonList[2]}/>
                <MyLabel className={"result"} text={"result"}/>
                <ShowNameCount className={"people"} text={"0 people"}/>
                <ShowShuffleList/>
            </div>
        </Provider>

    );
}

export default App;
