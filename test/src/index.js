import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import Route from './routes'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

        <Route/>

    , document.getElementById('root')
);
// registerServiceWorker();
/*import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Route from 'Routes'
import 'Style/base'
import 'Style/antdOverride'
import './config/index.js'
import store from './store/store'
import './config/arrow'

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('root')
)

/!*registerServiceWorker();*!/*/


