import {GET_PHOTOS_REQUEST} from "./task_1_4";



function getArray() {


}


export function task_1_1(data) {
    data = getArray();
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
