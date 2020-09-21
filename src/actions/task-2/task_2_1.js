import { order1 } from '../../reducers/orders-1'
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'


function getArray() {
    var data=[],name,summ = 0,pv = 2400,amt=2400,flag=0,items=0


    for(var i=0;i<order1.deliveryOrders.length;i++){
            name = order1.deliveryOrders[i].guests[0].name
            items = order1.deliveryOrders[i].items.length

            for(var z=0;z<data.length;z++){
                if(data[z].name===name){
                    data[z].uv=data[z].uv+summ
                    flag=1
                    break
                }
                else{
                    flag=0
                }
            }
            if(flag===0){
                    data.push({name: name, uv: items, pv: 100, amt: 100})
                    flag = 1
                }


        }




    return data;
}



export function task_2_1(data) {
    data = getArray();
    console.log(data)
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}