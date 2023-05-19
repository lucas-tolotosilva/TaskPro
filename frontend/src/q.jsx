// Componente de criação de tarefas
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTaskForm() {
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    useEffect(() => {
        // Buscar as opções existentes de tags, categorias e status do backend
        fetchOptions();
    }, []);

    const fetchOptions = async () => {
        try {
            const responseTags = await axios.get('/api/tags/');
            setTags(responseTags.data);

            const responseCategories = await axios.get('/api/categories/');
            setCategories(responseCategories.data);

            const responseStatuses = await axios.get('/api/statuses/');
            setStatuses(responseStatuses.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Criar a nova tarefa no backend
        try {
            const response = await axios.post('/api/tasks/', {
                tag: selectedTag,
                category: selectedCategory,
                status: selectedStatus,
                // outros campos da tarefa
            });

            console.log('Nova tarefa criada:', response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Tag:
                <select value={selectedTag} onChange={(event) => setSelectedTag(event.target.value)}>
                    <option value="">Selecione uma tag</option>
                    {tags.map((tag) => (
                        <option key={tag.id} value={tag.id}>{tag.name}</option>
                    ))}
                </select>
            </label>

            <label>
                Categoria:
                <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </label>

            <label>
                Status:
                <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
                    <option value="">Selecione um status</option>
                    {statuses.map((status) => (
                        <option key={status.id} value={status.id}>{status.name}</option>
                    ))}
                </select>
            </label>

            {/* Outros campos do formulário de criação de tarefas */}

            <button type="submit">Criar Tarefa</button>
        </form>
    );
}
