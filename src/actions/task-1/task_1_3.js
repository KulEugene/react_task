import {order1} from '../../reducers/orders-1'


export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


function math(arr) {
    for (var z = 0; z < arr.length; z++) {
        arr[z].cancelled = (arr[z].problem /(arr[z].problem + arr[z].notProblem)) * 100
        arr[z].closed = 100 - arr[z].cancelled
    }
    return arr
}

export function sortByDate(arr) {
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
    var data = [], flag = 0, date, problem = 0, notProblem = 0
    for (var i = 0; i < order1.deliveryOrders.length; i++) {
        date = order1.deliveryOrders[i].deliveryDate.slice(0, order1.deliveryOrders[i].deliveryDate.indexOf(' '))

        if (order1.deliveryOrders[i].statusCode === "CLOSED") {
            for (var z = 0; z < data.length; z++) {
                if (data[z].name === date) {
                    data[z].notProblem = data[z].notProblem + 1
                    flag = 1
                    break
                } else {
                    problem=0
                    notProblem=1
                    flag = 0
                }
            }
        }
    else
            for (var z = 0; z < data.length; z++) {
                if (data[z].name === date) {
                    data[z].problem = data[z].problem + 1
                    flag = 1
                    break
                } else {
                    problem=1
                    notProblem=0
                    flag = 0
                }
            }

        if (flag === 0) {
            data.push({name: date, problem: problem, notProblem: notProblem})

        }
    }

    data = math(data);
    data = sortByDate(data);

    return data
}


export function task_1_3(data) {
    data = getArray();
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
