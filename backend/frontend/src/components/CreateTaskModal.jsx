import React, { useState } from 'react'
import Modal from 'react-modal';
import { FormCreateTask } from '../components/FormCreateTask'

import btnClose from '../assets/close.png'

export function CreateTask({ modalIsOpen, closeModal }) {

    Modal.setAppElement('#root');

    const handleCloseModal = () => {
        closeModal()
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
        >
            <div className='relative'>
                <button className='absolute top-1 right-1 w-3' onClick={handleCloseModal}>
                    <img src={btnClose} />
                </button>
                <FormCreateTask />

            </div>
        </Modal>
    )
}