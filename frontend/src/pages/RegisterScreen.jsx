import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../actions/userActions'
import { Header } from '../components/Header'
import { Message } from '../components/Message'

export function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('As senhas não coincidem')
        } else {
            dispatch(register(name, email, password))
            if (!error) {
                navigate('/register')
            } else {
                if (userInfo) {
                    navigate('/')
                    console.log('d')
                }
            }
        }


    }

    return (
        <div className='overflow-hidden h-screen'>
            <Header />
            <div className='w-full h-screen bg-[#b1d8cb] flex justify-center pt-10 relative'>
                <form onSubmit={submitHandler}>
                    <div className='w-[800px] h-[700px] bg-[#ecffd8] flex justify-center relative'>
                        {message && <Message>{message}</Message>}
                        {error && <Message>{error}</Message>}
                        <div className='w-full flex flex-col items-center gap-10 justify-center pl-10  font-poppins'>
                            <div className='flex flex-col w-4/5'>
                                <span className='font-normal text-[#5c5c5c]'>_Nome</span>
                                <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                                    required
                                    placeholder='ex.: João da Silva'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={e => { setName(e.target.value) }} />
                            </div>
                            <div className='flex flex-col w-4/5'>
                                <span className='font-normal text-[#5c5c5c]'>_Email</span>
                                <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                                    required
                                    placeholder='ex.: joao@gmail.com'
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value) }} />
                            </div>
                            <div className='flex flex-col w-4/5'>
                                <span className='font-normal text-[#5c5c5c]'>_Senha</span>
                                <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                                    required
                                    placeholder=''
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }} />
                            </div>
                            <div className='flex flex-col w-4/5'>
                                <span className='font-normal text-[#5c5c5c]'>_Confirmar Senha</span>
                                <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                                    required
                                    placeholder=''
                                    type="password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    value={confirmPassword}
                                    onChange={e => { setConfirmPassword(e.target.value) }} />
                            </div>
                            <input type='submit' value="Enviar" className='bg-[#408d89] hover:cursor-pointer text-white w-1/5 rounded-md py-1' />

                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}