import {GET_PHOTOS_REQUEST} from '../actions/task-2/task_2_3'
const initialState = {list:[]};

export function viewReducer(state = initialState,action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, list:action.payload }

        default:
            return state
    }
}