import {order1} from '../../reducers/orders-1'
import {array} from "prop-types";

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];




function sortByDate(arr) {
    for (var z = 0; z < arr.length; z++) {
        // eslint-disable-next-line no-undef
        arr[z].name = arr[z].name.replace(/-/g, "");
    }
    arr.sort((a, b) => a.name > b.name ? 1 : -1);
    for (var z = 0; z < arr.length; z++) {
        arr[z].name = arr[z].name.replace(/(\d{1,4}(?=(?:\d\d)+(?!\d)))/g, "$1" + '-');
    }
    return arr;
}

function getArray() {
    var data = [], name, summ = 0, pv = 2400, amt = 2400, flag = 0, date,summ1=0,summ2=0,summ3=0
    for (var i = 0; i < order1.deliveryOrders.length; i++) {
        date = order1.deliveryOrders[i].deliveryDate.slice(0, order1.deliveryOrders[i].deliveryDate.indexOf(' '))

        for(var k=0;k<order1.deliveryOrders[i].items.length;k++) {
            summ =summ + order1.deliveryOrders[i].items[k].sum
        }

        if (order1.deliveryOrders[i].statusCode === "CLOSED") {
            for (var z = 0; z < data.length; z++) {
                if (data[z].name === date) {
                    data[z].uv=data[z].uv+summ
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
                    console.log(summ)
                    data[z].pw=data[z].pw+summ
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
            data.push({name: date,uv:summ2, pw: summ1})
            summ=0
            flag = 1
        }


    }


    data = sortByDate(data);

    return data
}


export function task_1_4(data) {
    data = getArray();
    console.log(data)
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
