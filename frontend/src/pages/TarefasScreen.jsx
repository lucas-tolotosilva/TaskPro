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
        <div>
            <Header />

            {tarefas && Object.values(tarefas).map(tarefa => (
                <div key={tarefa.idTarefa}>
                    <ul>
                        <li>{tarefa.nome}</li>
                        <li>{tarefa.descricao}</li>
                        <li>{tarefa.status}</li>
                        <li>{tarefa.usuario}</li>
                        <li>{tarefa.tag}</li>
                        <li>{tarefa.comentario}</li>
                    </ul>
                </div>
            ))}


        </div>
    )
}