import {getArray1} from "./task_2_1";
import {getArray2} from "./task_2_2";
import {getArray3} from "./task_2_3";
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'



export function task_2_4(data) {
    data=[]
    data = getArray1(data)
    data = getArray2(data)
    data = getArray3(data)
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
