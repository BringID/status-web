import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

import type {} from 'redux-thunk/extend-redux'

const middlewares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
