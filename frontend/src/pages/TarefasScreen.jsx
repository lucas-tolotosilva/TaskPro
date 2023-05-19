import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { listTarefas } from '../actions/tarefaActions'
import { Header } from '../components/Header'
import { Message } from '../components/Message'

export function TarefasScreen() {

    const dispatch = useDispatch()

    const tarefaList = useSelector(state => state.tarefaList)
    const { error, tarefas } = tarefaList

    useEffect(() => {
        dispatch(listTarefas())
    }, [dispatch])

    return (
        <div className='bg-[#EDF2E3] min-h-screen'>
            <Header />
            <div className='w-full h-full flex justify-center mt-16'>
                <table className='table-auto w-3/4 text-left border  border-sky-500'>
                    <thead className='bg-[#C0D29D]'>
                        <th>Prioridade</th>
                        <th>Tarefa</th>
                        <th>Descricao</th>
                        <th>Criador</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {tarefas && Object.values(tarefas).map(tarefa => (
                            <tr key={tarefa.idTarefa}>
                                <td>{tarefa.nome}</td>
                                <td>{tarefa.descricao}</td>
                                <td>{tarefa.status}</td>
                                <td>{tarefa.nomeUsuario}</td>
                                <td>{tarefa.nomeTag}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}