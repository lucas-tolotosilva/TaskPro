import axios from 'axios'
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

export const listInvestimento = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: INVESTIMENTO_LIST_REQUEST
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
            'http://127.0.0.1:8000/api/investimentos/',
            config
        )

        dispatch({
            type: INVESTIMENTO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTIMENTO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createInvestimento = (valor_inicial, taxa_juros, periodo) => async (dispatch) => {
    try {
        dispatch({
            type: INVESTIMENTO_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/investimentos/create/',
            {
                'valor_inicial': valor_inicial,
                'taxa_juros': taxa_juros,
                'periodo': periodo
            },
            config
        )

        dispatch({
            type: INVESTIMENTO_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTIMENTO_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateInvestimento = (id, nome, categoria, descricao, status, usuario, tag) => async (dispatch) => {
    try {
        dispatch({
            type: INVESTIMENTO_UPDATE_REQUEST
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
            type: INVESTIMENTO_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTIMENTO_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteInvestimento = (id) => async (dispatch) => {
    try {
        dispatch({
            type: INVESTIMENTO_DELETE_REQUEST
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
            type: INVESTIMENTO_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTIMENTO_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

