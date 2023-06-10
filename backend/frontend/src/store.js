import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { investimentoReducer, investimentoRegisterReducer, investimentoDeleteReducer } from './reducers/investimentoReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    investimentoList: investimentoReducer,
    investimentoCreate: investimentoRegisterReducer,
    investimentoDelete: investimentoDeleteReducer
})

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    devTools: true
})

export default store
