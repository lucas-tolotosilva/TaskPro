import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTags, listStatus, listCategoria } from '../actions/tcsActions'

export function FormCreateTask() {
    const [selectedTag, setSelectedTag] = useState()
    const [selectedCategoria, setSelectedCategoria] = useState()

    const dispatch = useDispatch()

    const tagList = useSelector(state => state.tagList)
    const statusList = useSelector(state => state.statusList)
    const categoriaList = useSelector(state => state.categoriaList)

    const { error, tags } = tagList
    const { status } = statusList
    const { categorias } = categoriaList

    const handleSelectedTag = (e) => {
        const option = e.target.value
        setSelectedTag(option)
    }

    const handleSelectedCategoria = (e) => {
        const option = e.target.value
        setSelectedCategoria(option)
    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        dispatch(listTags())
        dispatch(listStatus())
        dispatch(listCategoria())
    }, [dispatch])

    return (
        <div className='w-full h-full flex items-center justify-center'>

            <form onSubmit={handleSubmit} className='flex flex-col p-10 bg-[#b1d8cb] rounded-lg h-1/2 w-1/2'>
                <label>Nome da Tarefa</label>
                <input className='p-1 rounded-lg text-gray' />

                <br />
                <label>Selecione a Tag</label>
                <select onChange={handleSelectedTag} value={selectedTag} className='p-1 rounded-lg text-gray'>
                    {tags && Object.values(tags).map(tag => (
                        <option key={tag.idTag} className='text-black'>{tag.nomeTag}</option>
                    ))}
                </select>

                <br />
                <label>Selecione a Categoria</label>
                <select onChange={handleSelectedCategoria} value={selectedCategoria} className='p-1 rounded-lg text-gray'>
                    {categorias && Object.values(categorias).map(categoria => (
                        <option key={categoria.idCategoria} className='text-black'>{categoria.descricao}</option>
                    ))}
                </select>

                <br />

                <label>Coloque alguma desrição se tiver</label>
                <textarea className='rounded-lg' />

                <br />

                <div className='w-full flex justify-center'>
                    <button className='w-32 p-1 rounded-lg bg-[#408d89]' type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}