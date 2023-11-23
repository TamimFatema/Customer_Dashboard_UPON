import React from 'react'
import logo from '../../assets/Rectangle 2694.png'

function Inbox() {
    return (
        <div className="flex flex-col sm:flex-row mx-auto lg:mx-0 p-3 lg:p-0 bg-white w-full md:w-[750px] rounded-lg gap-2 lg:gap-0">
            <div className='flex flex-col p-5 gap-5 border-2 lg:border-t-0 lg:border-l-0 lg:border-b-0 rounded-lg lg:rounded-none'>
                <h6 className='font-bold'>Messages</h6>
                <div className='flex gap-2 border-2 p-2 rounded-lg '>
                    <span class="material-symbols-outlined">
                        search
                    </span>
                    <input type='text' placeholder='Search' className='w-full' />
                </div>
                <div className='flex justify-between p-1 bg-[#F8F5FF] rounded-lg'>
                    <div className='flex p-2 gap-2 items-center'>
                        <img src={logo} className='border-2 p-1 border-gray-400 rounded-lg' />
                        <span>Admin</span>
                    </div>
                    <span className='text-xs'>Nov 08</span>
                </div>
            </div>


            <div className='flex flex-col flex-grow border-2 lg:border-none rounded-lg'>
                <div className='flex border-b-2'>
                    <div className='flex p-2 gap-2 items-center'>
                        <img src={logo} className='border-2 p-1 border-gray-400 rounded-lg' />
                        <span>Admin</span>
                    </div>
                </div>
                <div className='flex flex-col p-2'>
                    <div className='flex flex-col gap-1 w-3/4 self-end mb-2'>
                        <p className='p-2 bg-[#E0D3FE] rounded-lg rounded-br-none'>Hello</p>
                        <p className='text-xs'>11:57 AM | Nov 08, 2023</p>
                    </div>
                    <div className='flex flex-col gap-1 w-3/4 mb-2'>
                        <p className='p-2 bg-[#D9D9D9] rounded-lg rounded-bl-none'>Hello</p>
                        <p className='text-xs'>11:58 AM | Nov 08, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox