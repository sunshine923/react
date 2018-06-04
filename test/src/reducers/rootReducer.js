// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
/*import { user } from '../redux/userRedux'*/
import { task } from '../redux/taskRedux'
// import { abnormal } from '../redux/abnormalRedux'
/*import { search } from '../redux/searchRedux'*/
export default combineReducers({task})

