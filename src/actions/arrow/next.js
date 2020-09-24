import {GET_PHOTOS_REQUEST} from "../task-1/task_1_4";
import {countData} from "../../components/Task";

export function arrow(data) {

    data=data.slice((countData*10)-10,countData*10)
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
