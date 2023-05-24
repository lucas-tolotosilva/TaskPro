import axios from 'axios'
import {
    TAREFA_LIST_REQUEST,
    TAREFA_LIST_SUCCESS,
    TAREFA_LIST_FAIL,

    TAREFA_REGISTER_REQUEST,
    TAREFA_REGISTER_SUCCESS,
    TAREFA_REGISTER_FAIL,
} from '../constants/tarefaConstants'

export const listTarefas = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TAREFA_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },

        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/tarefas/',
            config
        )

        dispatch({
            type: TAREFA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TAREFA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createTask = (nome, categoria, descricao, status, nomeUsuario, nomeTag) => async (dispatch) => {
    try {
        dispatch({
            type: TAREFA_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/users/create/',
            { 'nome': nome, 'categoria': categoria, 'descricao': descricao, 'status': status, 'nomeUsuario': nomeUsuario, 'nomeTag': nomeTag, },
            config
        )

        dispatch({
            type: TAREFA_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('tarefas', JSON.stringify(data))
        console.log(data)

    } catch (error) {
        dispatch({
            type: TAREFA_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}