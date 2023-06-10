import {
    INVESTIMENTO_LIST_REQUEST,
    INVESTIMENTO_LIST_SUCCESS,
    INVESTIMENTO_LIST_FAIL,

    INVESTIMENTO_REGISTER_REQUEST,
    INVESTIMENTO_REGISTER_SUCCESS,
    INVESTIMENTO_REGISTER_FAIL,

    INVESTIMENTO_DELETE_REQUEST,
    INVESTIMENTO_DELETE_SUCCESS,
    INVESTIMENTO_DELETE_FAIL,

    INVESTIMENTO_UPDATE_REQUEST,
    INVESTIMENTO_UPDATE_SUCCESS,
    INVESTIMENTO_UPDATE_FAIL,
} from '../constants/investimentoConstants'

const tarefaFromStorage = localStorage.getItem('investimento') ?
    JSON.parse(localStorage.getItem('investimento')) : null

export const investimentoReducer = (state = { tarefas: [tarefaFromStorage] }, action) => {
    switch (action.type) {
        case INVESTIMENTO_LIST_REQUEST:
            return { loading: true }

        case INVESTIMENTO_LIST_SUCCESS:
            return { loading: false, investimento: action.payload }

        case INVESTIMENTO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}
export const investimentoRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case INVESTIMENTO_REGISTER_REQUEST:
            return { loading: true }

        case INVESTIMENTO_REGISTER_SUCCESS:
            return { loading: false, investimento: action.payload }

        case INVESTIMENTO_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}

export const investimentoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case INVESTIMENTO_DELETE_REQUEST:
            return { loading: true }

        case INVESTIMENTO_DELETE_SUCCESS:
            return { loading: false, investimento: action.payload }

        case INVESTIMENTO_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}

export const investimentoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case INVESTIMENTO_UPDATE_REQUEST:
            return { loading: true }

        case INVESTIMENTO_UPDATE_SUCCESS:
            return { loading: false, investimento: action.payload }

        case INVESTIMENTO_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}

