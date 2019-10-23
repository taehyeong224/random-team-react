import {connect} from "react-redux";
import {addName} from "../actions";
import {LabelAndInput} from "./LabelAndInput";

export const NewName = connect(
    null,
    dispatch => ({
        clickMethod(name) {
            dispatch(addName(name))
        }
    })
)(LabelAndInput);