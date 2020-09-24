import {order1} from '../../reducers/orders-1'
import {sortByDate} from "./task_1_3";
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];





function getArray() {
    var data = [],  summ = 0, flag = 0, date,summ1=0,summ2=0
    for (var i = 0; i < order1.deliveryOrders.length; i++) {
        date = order1.deliveryOrders[i].deliveryDate.slice(0, order1.deliveryOrders[i].deliveryDate.indexOf(' '))

        for(var k=0;k<order1.deliveryOrders[i].items.length;k++) {
            summ =summ + order1.deliveryOrders[i].items[k].sum
        }

        if (order1.deliveryOrders[i].statusCode === "CLOSED") {
            for (var z = 0; z < data.length; z++) {
                if (data[z].name === date) {
                    data[z].profit=data[z].profit+summ
                    flag = 1
                    summ=0
                    break
                }
                else {
                    summ1=0
                    summ2=summ
                    flag = 0
                }
            }
        }
        else
            for (var z = 0; z < data.length; z++) {
                if (data[z].name === date) {
                    data[z].loss=data[z].loss+summ
                    flag = 1
                    summ=0
                    break
                }
                else {
                    summ1=summ
                    summ2=0
                    flag = 0
                }
            }

        if (flag === 0) {
            data.push({name: date,profit:summ2, loss: summ1})
            summ=0
            flag = 1
        }


    }


    data = sortByDate(data);

    return data
}


export function task_1_4(data) {
    data = getArray();
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
