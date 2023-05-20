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

export const tagReducer = (state = { tags: [] }, action) => {
    switch (action.type) {
        case TAG_LIST_REQUEST:
            return { loading: true }

        case TAG_LIST_SUCCESS:
            return { loading: false, tags: action.payload }

        case TAG_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const statusReducer = (state = { status: [] }, action) => {
    switch (action.type) {
        case STATUS_LIST_REQUEST:
            return { loading: true }

        case STATUS_LIST_SUCCESS:
            return { loading: false, status: action.payload }

        case STATUS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const categoriaReducer = (state = { categorias: [] }, action) => {
    switch (action.type) {
        case CATEGORIA_LIST_FAIL:
            return { loading: true }

        case CATEGORIA_LIST_FAIL:
            return { loading: false, categorias: action.payload }

        case CATEGORIA_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}