import axios from 'axios'
import {
    TAREFA_LIST_REQUEST,
    TAREFA_LIST_SUCCESS,
    TAREFA_LIST_FAIL,

    TAREFA_REGISTER_REQUEST,
    TAREFA_REGISTER_SUCCESS,
    TAREFA_REGISTER_FAIL,

    TAREFA_DELETE_REQUEST,
    TAREFA_DELETE_SUCCESS,
    TAREFA_DELETE_FAIL,

    TAREFA_UPDATE_REQUEST,
    TAREFA_UPDATE_SUCCESS,
    TAREFA_UPDATE_FAIL,
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

export const createTask = (nome, categoria, descricao, status, usuario, tag) => async (dispatch) => {
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
            'http://127.0.0.1:8000/api/tarefas/create/',
            {
                'nome': nome,
                'idCategoria': categoria,
                'descricao': descricao,
                'idStatus': status,
                'idUsuario': usuario,
                'idTag': tag
            },
            config
        )
        console.log(data)

        dispatch({
            type: TAREFA_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TAREFA_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateTask = (id, nome, categoria, descricao, status, usuario, tag) => async (dispatch) => {
    try {
        dispatch({
            type: TAREFA_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/tarefas/update/${id}/`,
            {
                'nome': nome,
                'idCategoria': categoria,
                'descricao': descricao,
                'idStatus': status,
                'idUsuario': usuario,
                'idTag': tag
            },
            config
        )

        dispatch({
            type: TAREFA_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TAREFA_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({
            type: TAREFA_DELETE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/tarefas/delete/${id}/`,
            config
        )

        dispatch({
            type: TAREFA_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TAREFA_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
