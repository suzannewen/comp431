// require('expose?$!expose?jQuery!jquery')
// require("bootstrap-webpack")
require('./styles.css')

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore } from 'redux'

import Reducer from './reducer'
import App from './app'

const store = createStore(Reducer)


render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('app')
)
