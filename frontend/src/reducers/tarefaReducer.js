import {
    TAREFA_LIST_REQUEST,
    TAREFA_LIST_SUCCESS,
    TAREFA_LIST_FAIL,
} from '../constants/tarefaConstants'

const tarefaFromStorage = localStorage.getItem('tarefas') ?
    JSON.parse(localStorage.getItem('tarefas')) : null

export const tarefaReducer = (state = { tarefas: [] }, action) => {
    switch (action.type) {
        case TAREFA_LIST_REQUEST:
            return { loading: true }

        case TAREFA_LIST_SUCCESS:
            return { loading: false, tarefas: action.payload }

        case TAREFA_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}

