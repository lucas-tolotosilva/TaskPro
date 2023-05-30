import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { listTarefas } from '../actions/tarefaActions'
import { Header } from '../components/Header'
import { Message } from '../components/Message'
import iDelete from '../assets/delete.png'
import iEdit from '../assets/edit.png'
import iAdd from '../assets/botao-adicionar.png'
import { CreateTask } from '../components/CreateTaskModal'
import { UpdateTask } from '../components/UpdateTaskModal'
import { deleteTask } from '../actions/tarefaActions'

export function TarefasScreen() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState();
    const [orderTarefas, setOrderTarefas] = useState();
    const [orderValue, setOrderValue] = useState();
    const [orderTag, setOrderTag] = useState();

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModalUpdate = (tarefa) => {
        setSelectedTask(tarefa);
        setUpdateIsOpen(true)
    }

    const closeModalUpdate = () => {
        setUpdateIsOpen(false)
    }

    const dispatch = useDispatch()

    const tarefaList = useSelector(state => state.tarefaList)

    const { error, tarefas } = tarefaList

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    const handleOrder = (e) => {
        setOrderValue(e.target.value)
    }

    console.log(orderValue)

    const handleOrderTag = (e) => {
        setOrderTag(e.target.value)
    }

    useEffect(() => {
        let orderedTasks = [];

        if (orderTag === 'Alta Urgência') {
            orderedTasks = tarefas.filter(tarefa => tarefa.nomeTag === 'Alta Urgência');
        } else if (orderTag === 'Média Urgência') {
            orderedTasks = tarefas.filter(tarefa => tarefa.nomeTag === 'Média Urgência');
        } else if (orderTag === 'Baixa Urgência') {
            orderedTasks = tarefas.filter(tarefa => tarefa.nomeTag === 'Baixa Urgência');
        } else {
            orderedTasks = tarefas; // Caso nenhuma opção seja selecionada, mantenha a ordem original
        }

        setOrderTarefas(orderedTasks);
    }, [orderTag, tarefas]);

    useEffect(() => {
        dispatch(listTarefas())
    }, [dispatch])

    return (
        <div className='bg-[#EDF2E3] min-h-screen'>
            <Header />
            <div className='w-full h-full flex flex-col items-center gap-6 justify-center mt-6'>
                <div className="w-3/4 flex gap-3 items-center">
                    <button onClick={openModal} className='border-2 p-2 rounded-full flex items-center gap-3 border-[#408d89]'>Criar Nova Tarefa <img className='w-5' src={iAdd} /></button>
                    <label>Ordenar por: </label>
                    <select onChange={handleOrder} value={orderValue} className='p-1 rounded-lg text-gray'>
                        <option className='text-black'>Todos</option>
                        <option className='text-black'>Tag</option>
                        <option className='text-black'>Status</option>
                        <option className='text-black'>Categoria</option>
                    </select>
                </div>

                <CreateTask closeModal={closeModal} modalIsOpen={modalIsOpen} />

                {orderValue === 'Tag' ?
                    <div className='w-3/4 justify-start mt-10'>
                        <label>Escolha o nível de Urgência: </label>
                        <select onChange={handleOrderTag} value={orderTag} className='p-1 rounded-lg text-gray'>
                            <option value="Alta Urgência" className='text-black'>Alta Urgência</option>
                            <option value="Média Urgência" className='text-black'>Média Urgência</option>
                            <option value="Baixa Urgência" className='text-black'>Baixa Urgência</option>
                        </select>
                    </div> : null

                }


                <table className='table-auto w-3/4 text-left rounded-lg'>
                    <thead className='bg-[#408d89] px-10'>
                        <tr className='text-white'>
                            <th className='py-3 pl-3 rounded-tl-lg'>Prioridade</th>
                            <th>Tarefa</th>
                            <th>Descricao</th>
                            <th>Categoria</th>
                            <th>Status</th>
                            <th></th>
                            <th className='rounded-tr-lg'></th>
                        </tr>
                    </thead>
                    <tbody>

                        {orderTarefas && Object.values(orderTarefas).map((tarefa, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-[#dfe7cf]' : ''} border-b-2 mx-3 rounded-lg`}>
                                <td className='py-3 pl-3 '>{tarefa.nomeTag}</td>
                                <td >{tarefa.nome}</td>
                                <td>{tarefa.descricao}</td>
                                <td>{tarefa.categoria}</td>
                                <td>{tarefa.status}</td>
                                <td>
                                    <button onClick={() => openModalUpdate(tarefa)}>
                                        <img className='mx-2 w-5' src={iEdit} />
                                    </button>

                                </td>
                                <td><img className='mx-2 w-5 hover:cursor-pointer' onClick={() => handleDelete(tarefa.idTarefa)} src={iDelete} /></td>
                            </tr>
                        ))}
                    </tbody>
                    <UpdateTask
                        selectedTask={selectedTask}
                        closeModalUpdate={closeModalUpdate}
                        modalUpdateIsOpen={modalUpdateIsOpen}
                    />
                </table>
            </div>
        </div>
    )
}