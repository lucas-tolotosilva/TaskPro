import axios from 'axios'
import {
    TAG_LIST_REQUEST,
    TAG_LIST_SUCCESS,
    TAG_LIST_FAIL,

    STATUS_LIST_REQUEST,
    STATUS_LIST_SUCCESS,
    STATUS_LIST_FAIL,

    CATEGORIA_LIST_REQUEST,
    CATEGORIA_LIST_SUCCESS,
    CATEGORIA_LIST_FAIL
} from '../constants/tcsConstants'

export const listTags = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TAG_LIST_REQUEST
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
            'http://127.0.0.1:8000/api/get/tag/',
            config
        )

        dispatch({
            type: TAG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TAG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listStatus = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: STATUS_LIST_REQUEST
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
            'http://127.0.0.1:8000/api/get/status/',
            config
        )

        dispatch({
            type: STATUS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STATUS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listCategoria = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORIA_LIST_REQUEST
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
            'http://127.0.0.1:8000/api/get/categoria/',
            config
        )

        dispatch({
            type: CATEGORIA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORIA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}