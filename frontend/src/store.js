import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { tarefaReducer, tarefaRegisterReducer } from './reducers/tarefaReducer'
import { tagReducer, statusReducer, categoriaReducer } from './reducers/tcsReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    tarefaList: tarefaReducer,
    tarefaCreate: tarefaRegisterReducer,
    tagList: tagReducer,
    statusList: statusReducer,
    categoriaList: categoriaReducer
})

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    devTools: true
})

export default store
