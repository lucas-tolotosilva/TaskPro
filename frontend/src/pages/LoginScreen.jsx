import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../actions/userActions'
import { Header } from '../components/Header'
import { Message } from '../components/Message'

export function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const dispatch = useDispatch()
    const { error, userInfo } = userLogin

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (error) {
            navigate('/login')
        } else if (userInfo) {
            navigate('/user/tarefas')
        }
    }, [error, navigate, userInfo])

    return (
        <div className='bg-[#b1d8cb] min-h-screen'>
            <Header />
            <div className='w-full bg-[#b1d8cb] flex justify-center pt-32'>
                <form onSubmit={submitHandler}>
                    <div className='w-[800px] h-[500px] bg-[#ecffd8] flex '>

                        <div className='w-1/3 bg-[#408d89] text-white text-[40px] gap-20 font-bold font-poppins flex flex-col justify-center items-center shadow-lg'>
                            <span>Log in</span>
                            <div className='text-white text-[15px] font-normal font-poppins flex flex-col justify-center items-center'>
                                <span className='text-center text-[12px]'>Se ainda não tem <br /> conta clique no botão abaixo</span>
                                <button className='rounded-full mt-4 bg-white px-4 py-1 text-[#408d89]'><Link to="/register">Cadastre-se</Link></button>
                            </div>

                        </div>
                        <div className='w-2/3 flex flex-col gap-10 justify-center pl-10  font-poppins relative'>

                            {error && <Message>{error}</Message>}

                            <br />
                            <div className='flex flex-col w-4/5'>
                                <span className='font-normal text-[#5c5c5c]'>_Email</span>
                                <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                                    required
                                    placeholder='ex.: joao@gmail.com'
                                    type="text"
                                    value={email}
                                    id="email"
                                    name="email"
                                    onChange={e => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div className='flex flex-col w-4/5'>
                                <span className='font-normal text-[#5c5c5c]'>_Senha</span>
                                <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                                    required
                                    type="password"
                                    value={password}
                                    id="password"
                                    name="password"
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                            </div>

                            <input type='submit' value="Enviar" className='bg-[#408d89] hover:cursor-pointer text-white w-1/5 rounded-md py-1' />
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}