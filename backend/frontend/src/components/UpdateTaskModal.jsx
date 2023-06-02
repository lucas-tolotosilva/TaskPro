import React, { useState } from 'react'
import Modal from 'react-modal';
import { FormUpdateTask } from '../components/FormUpdateTask'

import btnClose from '../assets/close.png'

export function UpdateTask({ selectedTask, modalUpdateIsOpen, closeModalUpdate }) {

    Modal.setAppElement('#root');

    const handleCloseModal = () => {
        closeModalUpdate()
    }

    return (
        <Modal
            isOpen={modalUpdateIsOpen}
            onRequestClose={handleCloseModal}
        >
            <div className='relative'>
                <button className='absolute top-1 right-1 w-3' onClick={handleCloseModal}>
                    <img src={btnClose} />
                </button>
                <FormUpdateTask selectedTask={selectedTask} />

            </div>
        </Modal>
    )
}