import {order1} from '../../reducers/orders-1'
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'

function getProblem(){
    var problem=[],nameProblem,fullNameProblem,countProblem,flag = 0
    for (var i = 0; i < order1.deliveryOrders.length; i++) {
        if (order1.deliveryOrders[i].problem !== null) {
            countProblem = order1.deliveryOrders[i].problem.problem.split('\n').length;
            fullNameProblem = order1.deliveryOrders[i].problem.problem
            nameProblem = fullNameProblem.slice(0, fullNameProblem.indexOf(' '))
            for (var k = 0; k < countProblem; k++) {
                for (var z = 0; z < problem.length; z++) {
                    nameProblem = fullNameProblem.slice(0, fullNameProblem.indexOf(' '))
                    if (problem[z] === nameProblem) {
                        flag = 1
                        break
                    } else {
                        flag = 0
                    }
                }
                if (flag === 0) {
                    problem.push(nameProblem)
                }

                fullNameProblem = fullNameProblem.slice(0, fullNameProblem.indexOf('\n'))
            }
        }
    }
    return problem
}


function getDate(data){
    var date,flagDate=0
    for (var i = 0; i < order1.deliveryOrders.length; i++) {
        date = order1.deliveryOrders[i].deliveryDate.slice(0, order1.deliveryOrders[i].deliveryDate.indexOf(' '))
        for(var z =0;z<data.length;z++){
            if(data[z].name===date){
                flagDate=1
                break
            }
            else{
                flagDate=0
            }
        }
    if(flagDate===0)
    {
        data.push({name: date, problem:[]})
    }

    }
    return data
}

function getProblemOfDate(data){
    var date,countProblem,nameProblem,fullNameProblem,flag = 0
    for (var i = 0; i < order1.deliveryOrders.length; i++) {
        date = order1.deliveryOrders[i].deliveryDate.slice(0, order1.deliveryOrders[i].deliveryDate.indexOf(' '))
        if (order1.deliveryOrders[i].problem !== null) {
            countProblem = order1.deliveryOrders[i].problem.problem.split('\n').length;
            for (var z = 0; z < data.length; z++) {
                if (data[z].name === date) {
                    fullNameProblem = order1.deliveryOrders[i].problem.problem
                    nameProblem = fullNameProblem.slice(0, fullNameProblem.indexOf(' '))
                    for(var k=0;k<countProblem;k++){
                        for (var r = 0; r < data[z].problem.length; r++) {
                            nameProblem = fullNameProblem.slice(0, fullNameProblem.indexOf(' '))
                            if (data[z].problem[r].problem === nameProblem) {
                                data[z].problem[r].count= data[z].problem[r].count+1
                                flag = 1
                                break

                            } else {
                                flag = 0
                            }
                        }
                        if (flag === 0) {
                            data[z].problem.push({problem:nameProblem, count:1})
                            flag = 0
                        }
                        flag = 0
                        fullNameProblem = fullNameProblem.slice(0, fullNameProblem.indexOf('\n'))

                    }

                }
            }
        }
    }
return data
}

function getArray() {
    var data=[],  date, problem=[],countProblem,flagProblem=0

    problem = getProblem(problem)
    data = getDate(data)
    data = getProblemOfDate(data)
    console.log('массив ниже')
    console.log(data)
return data
}



export function task_1_2(data) {
    data = getArray();

    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: data,
        })
    }
}
