import {ADD_NAME, CLEAR_NAME, REMOVE_NAME, SET_SHUFFLE, SET_TEAM} from './config/constants'
import v4 from 'uuid'

export const addName = (name) =>
    ({
        type: ADD_NAME,
        id: v4(),
        name
    });

export const removeName = id =>
    ({
        type: REMOVE_NAME,
        id
    });
export const clearName = () =>
    ({
       type: CLEAR_NAME
    });


export const setShuffle = (shuffleList) =>
    ({
       type: SET_SHUFFLE,
       shuffleList
    });

export const setTeam = (team) =>
    ({
        type: SET_TEAM,
        ...team
    });