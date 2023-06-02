import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTags, listStatus, listCategoria } from '../actions/tcsActions'
import { createTask } from '../actions/tarefaActions'
import { useNavigate } from 'react-router-dom'

export function FormCreateTask() {
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [selectedTag, setSelectedTag] = useState()
    const [selectedCategoria, setSelectedCategoria] = useState()
    const [selectedStatus, setSelectedStatus] = useState()
    const [descricaoTarefa, setDescricaoTarefa] = useState()

    var idTag;
    var idStatus;
    var idCategoria;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const tagList = useSelector(state => state.tagList)
    const statusList = useSelector(state => state.statusList)
    const categoriaList = useSelector(state => state.categoriaList)

    const taskCreate = useSelector(state => state.tarefaCreate)

    const userLogged = useSelector(state => state.userLogin)

    const { tags } = tagList
    const { status } = statusList
    const { categorias } = categoriaList
    const { tarefas, error } = taskCreate
    const { userInfo } = userLogged

    if (selectedTag === 'Alta Urgência') {
        idTag = 1
    } else if (selectedTag === 'Média Urgência') {
        idTag = 2
    } else if (selectedTag === 'Baixa Urgência') {
        idTag = 3
    }

    if (selectedCategoria === 'Escola') {
        idCategoria = 1
    } else if (selectedCategoria === 'Academia') {
        idCategoria = 2
    } else if (selectedCategoria === 'Casa') {
        idCategoria = 3
    }

    if (selectedStatus === 'Parado') {
        idStatus = 1
    } else if (selectedStatus === 'Em andamento') {
        idStatus = 2
    } else if (selectedStatus === 'Finalizado') {
        idStatus = 3
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTask(nomeTarefa, idCategoria, descricaoTarefa, idStatus, userInfo.id, idTag))
        window.location.replace('http://localhost:3000/user/tarefas/');
    }

    useEffect(() => {
        dispatch(listTags())
        dispatch(listStatus())
        dispatch(listCategoria())
    }, [dispatch])
    console.log(error)
    return (
        <div className='w-full h-full flex items-center justify-center'>

            <form onSubmit={handleSubmit} className='flex flex-col p-10 bg-[#b1d8cb] rounded-lg h-1/2 w-1/2'>
                <label>Nome da Tarefa</label>
                <input
                    className='p-1 rounded-lg text-gray'
                    value={nomeTarefa}
                    onChange={e => { setNomeTarefa(e.target.value) }}
                />

                <br />
                <label>Selecione a Tag</label>
                <select onChange={e => { setSelectedTag(e.target.value) }} value={selectedTag} className='p-1 rounded-lg text-gray'>
                    {tags && Object.values(tags).map(tag => (
                        <option key={tag.idTag} className='text-black'>{tag.nomeTag}</option>
                    ))}
                </select>

                <br />
                <label>Selecione a Categoria</label>
                <select onChange={e => { setSelectedCategoria(e.target.value) }} value={selectedCategoria} className='p-1 rounded-lg text-gray'>
                    {categorias && Object.values(categorias).map(categoria => (
                        <option key={categoria.idCategoria} className='text-black'>{categoria.descricao}</option>
                    ))}
                </select>
                <br />
                <label>Selecione o Status</label>
                <select onChange={e => { setSelectedStatus(e.target.value) }} value={selectedStatus} className='p-1 rounded-lg text-gray'>
                    {status && Object.values(status).map(statu => (
                        <option key={statu.idStatus} className='text-black'>{statu.status}</option>
                    ))}
                </select>

                <br />

                <label>Coloque alguma desrição se tiver</label>
                <textarea
                    className='rounded-lg'
                    value={descricaoTarefa}
                    onChange={e => { setDescricaoTarefa(e.target.value) }}
                />

                <br />

                <div className='w-full flex justify-center'>
                    <button className='w-32 p-1 rounded-lg bg-[#408d89]' type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}