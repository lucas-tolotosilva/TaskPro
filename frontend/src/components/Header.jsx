import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { BiLogOut } from "react-icons/bi";
import { logout } from '../actions/userActions'
export function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="w-full h-32 py-8 px-32 bg-[#408d89]">
            <div className='w-full h-full flex justify-between items-center'>
                <div className='w-60 h-full text-white text-[30px] font-bold flex items-center font-poppins'>TaskPro</div>

                {userInfo ? (
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-2 text-white text-[18px] font-normal font-poppins'>
                            <FaUser className='hover:cursor-pointer' /><Link to="/">{userInfo.name}</Link>
                        </div>
                        <div className='flex items-center gap-2 text-white text-[18px] font-normal font-poppins'>
                            <BiLogOut className='hover:cursor-pointer' /><button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-2 text-white text-[18px] font-normal font-poppins'>
                            <FaUser className='hover:cursor-pointer' /><Link to="/login">Login</Link>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}