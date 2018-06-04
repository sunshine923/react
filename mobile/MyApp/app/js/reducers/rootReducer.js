/**
 * Created by liangge on 17/1/10.
 */
/*import { combineReducers } from 'redux';
import todos from './taskInfo';

const rootReducer = combineReducers({
    todos
});

export default rootReducer*/

// 合并所有reducer 并且返回
import { combineReducers } from 'redux'

import { task } from '../redux/taskRedux'
export default combineReducers({task})

