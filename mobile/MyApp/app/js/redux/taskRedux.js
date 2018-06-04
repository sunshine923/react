import ArrayUtils from '../util/ArrayUtils'
import _ from 'lodash'
//地理位置
const LOAD_DATA = 'LOAD_DATA' //初始化获取数据

const initState={
    taskList:[],
    isLoading:true,
    isNoMore:true,
}

// reducer
export function task(state=initState, action){
    switch(action.type){
        case LOAD_DATA: 
            return { ...state, taskList: action.payload.tasks, isLoading: false,isNoMore:action.payload.isNoMore }
        default:
            return {...state}
    }
}
//获取列表数据
function taskList(tasks,isNoMore){
    return {type:LOAD_DATA,payload:{tasks,isNoMore}}
}




