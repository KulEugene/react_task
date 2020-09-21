import {order1} from "../../reducers/orders-1";
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

function getArray() {
    var data=[],name,pv = 2400,amt=2400,flag=0

    for(var i=0;i<order1.deliveryOrders.length;i++){
        for(var r=0;r<order1.deliveryOrders[i].items.length;r++) {
                        name = order1.deliveryOrders[i].items[r].name
                        for (var z = 0; z < data.length; z++) {
                            if (data[z].name === name) {
                                data[z].uv = data[z].uv + 1
                                flag = 1
                                break
                            } else {

                                flag = 0
                            }
                        }
                        if (flag === 0) {
                            data.push({name: name, uv: 1, pv: 1000, amt: 1000})
                            flag = 1
            }

        }

    }

    return data
}

export function task_3_1(data) {
    data = getArray();
    console.log(data)
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}