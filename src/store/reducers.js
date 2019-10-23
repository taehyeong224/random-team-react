import {ADD_NAME, SET_NAMES, REMOVE_NAME, CLEAR_NAME, GET_NAMES} from "../config/constants"

export const names = (state = [], action) => {
    switch (action.type) {
        case ADD_NAME:
            return [
                ...state,
                name({}, action)
            ];
        case SET_NAMES:
            return;
        case REMOVE_NAME:
            return state.filter(
                c => c.id !== action.id
            );
        case CLEAR_NAME:
            return [];
        case GET_NAMES:
            return state;
        default:
            return state
    }
};

export const name = (state = {}, {type, id, name}) => {
    if (type === ADD_NAME) {
        return {
            id: id,
            name: name
        };
    } else {
        return state
    }
};