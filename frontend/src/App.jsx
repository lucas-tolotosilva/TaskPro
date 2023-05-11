import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from './pages/LoginScreen'
import { RegisterScreen } from './pages/RegisterScreen'
import { HomeScreen } from './pages/HomeScreen'

export function App() {
    return (
        <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/login' Component={LoginScreen} />
            <Route path='/register' Component={RegisterScreen} />
        </Routes>

    )
}