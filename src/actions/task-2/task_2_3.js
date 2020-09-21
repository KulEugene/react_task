import { order1 } from '../../reducers/orders-1'
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'


function getArray() {
var data=[],name,summ = 0,pv = 2400,amt=2400,flag=0


for(var i=0;i<order1.deliveryOrders.length;i++){
    if(order1.deliveryOrders[i].statusCode === "CANCELLED") {
        name = order1.deliveryOrders[i].guests[0].name
        for(var k=0;k<order1.deliveryOrders[i].items.length;k++) {
            summ =summ + order1.deliveryOrders[i].items[k].sum
        }
        for(var z=0;z<data.length;z++){
            if(data[z].name===name){
                data[z].uv=data[z].uv+summ
                summ=0
                flag=1
                break
            }
            else{
                flag=0
            }
        }
        if(flag===0){
            if (summ===0){

            }
            else {
                data.push({name: name, uv: summ, pv: 1000, amt: 1000})
                summ = 0
                flag = 1
            }
        }

    }
}


    return data;
}



export function task_2_3(data) {
    data = getArray();
    console.log(data)
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
