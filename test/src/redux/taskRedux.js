const LOAD_DATA = 'LOAD_DATA' //初始化获取数据

const initState={
    taskList:[],
}
// reducer
export function task(state=initState, action){
    switch(action.type){
        case LOAD_DATA: 
            return { ...state, taskList: action.payload.tasks}
        default:
            return state
    }
}


//获取列表数据
function getList(tasks,total){
    return {type:LOAD_DATA,payload:{tasks,total}}
}

