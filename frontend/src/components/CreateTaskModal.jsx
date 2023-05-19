import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/userActions'
import Modal from 'react-modal';

export function CreateTask({ modalIsOpen, closeModal }) {
    const [stateModalIsOpen, setStateIsOpen] = useState(false);

    Modal.setAppElement('#root');

    const handleCloseModal = () => {
        closeModal()
    }

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
        >

            <h1>Esse é um modal</h1>
            <button onClick={handleCloseModal}>content</button>
        </Modal>
    )
}