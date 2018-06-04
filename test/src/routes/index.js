import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import App from '../containers/App'
const routes = ()=>(
    <Router>
        <div>
            <Route path='/' component={App}></Route>
        </div>
    </Router>
)
export default routes