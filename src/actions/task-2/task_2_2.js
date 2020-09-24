import { order1 } from '../../reducers/orders-1'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

export function getArray2(data) {
    var name,summ = 0,flag=0
    for(var i=0;i<order1.deliveryOrders.length;i++){
        if(order1.deliveryOrders[i].statusCode === "CLOSED") {
            name = order1.deliveryOrders[i].guests[0].name
            for(var k=0;k<order1.deliveryOrders[i].items.length;k++) {
                summ =summ + order1.deliveryOrders[i].items[k].sum
            }
            for(var z=0;z<data.length;z++){
                if(data[z].name===name){
                    data[z].profit=data[z].profit+summ
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
                    data.push({name: name,profit:summ, products:0, loss:0})
                    summ = 0
                    flag = 1
                }
            }

        }
    }



    return data;
}



export function task_2_2(data) {
    data=[]
    data = getArray2(data);
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
