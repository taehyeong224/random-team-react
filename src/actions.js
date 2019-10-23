import {ADD_NAME, REMOVE_NAME} from './config/constants'
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
