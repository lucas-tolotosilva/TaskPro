import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { tarefaReducer } from './reducers/tarefaReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    tarefaList: tarefaReducer,
})

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    devTools: true
})

export default store
