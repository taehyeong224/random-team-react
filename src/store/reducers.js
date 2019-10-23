import {ADD_NAME, CLEAR_NAME, CLEAR_SHUFFLE, GET_NAMES, REMOVE_NAME, SET_SHUFFLE, SET_TEAM} from "../config/constants"

export const names = (state = [], action) => {
    switch (action.type) {
        case ADD_NAME:
            return [
                ...state,
                name({}, action)
            ];
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

const name = (state = {}, {type, id, name}) => {
    if (type === ADD_NAME) {
        return {
            id: id,
            name: name
        };
    } else {
        return state
    }
};

export const shuffleList = (state = [], {type, shuffleList}) => {
    switch (type) {
        case SET_SHUFFLE:
            return [
                ...shuffleList
            ];
        case CLEAR_SHUFFLE:
            return [];
        default:
            return state;
    }
};

export const team = (state = {}, {type, team}) => {
  if (type === SET_TEAM) {
      return team;
  }  else {
      return state
  }
};