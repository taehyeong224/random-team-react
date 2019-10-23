import {connect} from "react-redux";
import {addName, clearName, setShuffle, setTeam} from "../actions";
import {LabelAndInput} from "./LabelAndInput";
import {MyButton} from "./MyButton";
import {ShakeButton} from "./ShakeButton";
import {TeamComponent} from "./TeamComponent";
import {NameList} from "./NameList";
import {ShuffleList} from "./ShuffleList";
import {MyLabel} from "./MyLabel";

export const NewName = connect(
    null,
    dispatch => ({
        clickMethod(name) {
            dispatch(addName(name))
        }
    })
)(LabelAndInput);

export const ClearName = connect(
    null,
    dispatch => ({
        clickMethod() {
            dispatch(clearName())
        }
    })
)(MyButton);

export const ShakeName = connect(
    state => ({
        names: [...state.names.map((name) => name.name)],
        team: {...state.team}
    }),
    dispatch => ({
        clickMethod(shuffleList) {
            dispatch(setShuffle(shuffleList));
        }
    })
)(ShakeButton)

export const TeamSetting = connect(
    state => ({
        team: {...state.team}
    }),
    dispatch => ({
        onChange(team) {
            dispatch(setTeam(team));
        }
    })
)(TeamComponent)


export const ShowNameList = connect(
    state => ({
        names: [...state.names]
    })
)(NameList)

export const ShowShuffleList = connect(
    state => ({
        shuffleList: [...state.shuffleList]
    })
)(ShuffleList)

export const ShowNameCount = connect(
    state => ({
        names: [...state.names]
    })
)(MyLabel)