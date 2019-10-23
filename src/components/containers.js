import {connect} from "react-redux";
import {addName, clearName, setShuffle, setTeam} from "../actions";
import {LabelAndInput} from "./LabelAndInput";
import {MyButton} from "./MyButton";
import {ShakeButton} from "./ShakeButton";
import {TeamComponent} from "./TeamComponent";
import {NameList} from "./NameList";

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
        shuffleList: [...state.shuffleList],
        team: {...state.team}
    }),
    dispatch => ({
        clickMethod(shuffleList) {
            dispatch(setShuffle(shuffleList));
        }
    })
)(ShakeButton)

export const TeamSetting = connect(
    null,
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