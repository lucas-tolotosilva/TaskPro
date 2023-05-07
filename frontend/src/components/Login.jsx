import React, { useEffect, useState } from 'react'
import axios from 'axios'


const API_URL = 'http://127.0.0.1:8000/api/token/'

export function Login() {


    return (
        <form onSubmit={handleSubmit()}>
            <div className='w-[800px] h-[500px] bg-[#ecffd8] flex'>

                <div className='w-1/3 bg-[#408d89] text-white text-[40px] gap-20 font-bold font-poppins flex flex-col justify-center items-center shadow-lg'>
                    <span>Log in</span>
                    <div className='text-white text-[15px] font-normal font-poppins flex flex-col justify-center items-center'>
                        <span className='text-center text-[12px]'>Se ainda não tem <br /> conta clique no botão abaixo</span>
                        <button className='rounded-full mt-4 bg-white px-4 py-1 text-[#408d89]'>Cadastre-se</button>
                    </div>

                </div>
                <div className='w-2/3 flex flex-col gap-10 justify-center pl-10  font-poppins'>
                    <div className='flex flex-col w-4/5'>
                        <span className='font-normal text-[#5c5c5c]'>_Nome</span>
                        <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                            placeholder='ex.: João da Silva'
                            type="text"
                            value={email}
                            id="name"
                            name="name"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col w-4/5'>
                        <span className='font-normal text-[#5c5c5c]'>_Email</span>
                        <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]'
                            placeholder='ex.: joao@gmail.com'
                            type="password"
                            value={password}
                            id="email"
                            name="email"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <input type='submit' value="Enviar" className='bg-[#408d89] hover:cursor-pointer text-white w-1/5 rounded-md py-1' />
                </div>

            </div>
        </form>
    )
}