import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer
})

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    devTools: true
})

export default store
