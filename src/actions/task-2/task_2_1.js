import { order1 } from '../../reducers/orders-1'
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

export function getArray1(data) {
    var name,flag=0,items=0
    for(var i=0;i<order1.deliveryOrders.length;i++){
            name = order1.deliveryOrders[i].guests[0].name
            items = order1.deliveryOrders[i].items.length

            for(var z=0;z<data.length;z++){
                if(data[z].name===name){
                    data[z].products=data[z].products+items
                    flag=1
                    break
                }
                else{
                    flag=0
                }
            }
            if(flag===0){
                    data.push({name: name,profit:0, products:items, loss:0})
                    flag = 1
                }


        }




    return data;
}



export function task_2_1(data) {
    data=[]
    data = getArray1(data);
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}