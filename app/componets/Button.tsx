import React from 'react'

const Button = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className='relative w-fit group'>
            <button
                className="w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black relative z-10  group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
                     ">
                {children}
            </button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
    )
}

export default Button
