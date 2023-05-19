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
                <table className='table-auto w-3/4 text-left rounded-lg'>
                    <thead className='bg-[#C0D29D] px-10'>
                        <tr className=''>
                            <th className='py-3 pl-3 rounded-tl-lg'>Prioridade</th>
                            <th>Tarefa</th>
                            <th>Descricao</th>
                            <th>Criador</th>
                            <th className='rounded-tr-lg'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas && Object.values(tarefas).map(tarefa => (
                            <tr key={tarefa.idTarefa} className={`${tarefa.idTarefa % 2 === 0 ? 'bg-[#dfe7cf]' : ''} border-b-2 mx-3 rounded-lg`}>
                                <td className='py-3 pl-3 '>{tarefa.nome}</td>
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