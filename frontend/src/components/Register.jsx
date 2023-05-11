import React from 'react'

export function Register() {
    return (
        <div className='w-[800px] h-[500px] bg-[#ecffd8] flex'>
            <div className='w-1/3 bg-[#408d89] text-white text-[40px] gap-20 font-bold font-poppins flex flex-col justify-center items-center shadow-lg'>
                <span>Inscreva-se</span>
                <div className='text-white text-[15px] font-normal font-poppins flex flex-col justify-center items-center'>
                    <span className='text-center text-[12px]'>Se já tem conta<br /> clique no botão abaixo</span>
                    <button className='rounded-full mt-4 bg-white px-4 py-1 text-[#408d89]'>Log in</button>
                </div>

            </div>
            <div className='w-2/3 flex flex-col gap-10 justify-center pl-10  font-poppins'>
                <div className='flex flex-col w-4/5'>
                    <span className='font-normal text-[#5c5c5c]'>_Nome</span>
                    <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]' placeholder='ex.: João da Silva' type="text" id="name" name="name" />
                </div>
                <div className='flex flex-col w-4/5'>
                    <span className='font-normal text-[#5c5c5c]'>_Email</span>
                    <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]' placeholder='ex.: joao@gmail.com' type="text" id="email" name="email" />
                </div>
                <div className='flex flex-col w-4/5'>
                    <span className='font-normal text-[#5c5c5c]'>_Senha</span>
                    <input className='py-2 pl-2 mt-2 outline-none active:text-slate-400 rounded-full shadow-md shadow-[#c8c8c8]' placeholder='' type="password" id="password" name="password" />
                </div>
                <input type='submit' value="Enviar" className='bg-[#408d89] hover:cursor-pointer text-white w-1/5 rounded-md py-1' />

            </div>
        </div>
    )
}