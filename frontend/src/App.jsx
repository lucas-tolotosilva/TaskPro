import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from './pages/LoginScreen'
import { RegisterScreen } from './pages/RegisterScreen'
import { HomeScreen } from './pages/HomeScreen'
import { TarefasScreen } from './pages/TarefasScreen'

export function App() {
    return (
        <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/login' Component={LoginScreen} />
            <Route path='/register' Component={RegisterScreen} />
            <Route path='/user/tarefas' Component={TarefasScreen} />
        </Routes>

    )
}