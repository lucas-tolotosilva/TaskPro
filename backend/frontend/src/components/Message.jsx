import React from 'react'

export function Message({ children }) {
    return (
        <div className='absolute top-10 w-2/3 mb-4 bg-[#FA8072] border-2 border-[##FF6347] text-[#B22222] py-3 pl-3 font-normal' >
            {children}
        </div>
    )
}

