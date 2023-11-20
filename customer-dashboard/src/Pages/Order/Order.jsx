import React from 'react'

function Order() {
    return (
        <div className="w-[1000px] bg-white h-fit rounded-lg">
            <div className='flex justify-between p-4'>
                <h6 className='font-bold text-2xl'>My Order List</h6>
                <div className='flex items-center gap-1 p-2 rounded-lg bg-gray-300'>
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                    <span>Sort by: Default</span>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
            </div>
            <table className='table-auto w-full'>
                <thead className='bg-purple-100'>
                    <tr className='text-left'>
                        <th className='py-2 pl-4'>SL</th>
                        <th className='py-2 pl-4'>Order ID</th>
                        <th className='py-2 pl-4'>Product Details</th>
                        <th className='py-2 pl-4'>Date</th>
                        <th className='py-2 pl-4'>Status</th>
                        <th className='py-2 pl-4'>Amount</th>
                        <th className='py-2 pl-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-2 pl-4'>1</td>
                        <td className='py-2 pl-4'>123456</td>
                        <td className='py-2 pl-4'>
                            <div className='flex gap-2'>
                                <img className='w-[50px] p-1 border-2 rounded-lg' src='https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-100,width-100,imgv-2/80635321.jpg' />
                                <div className='flex flex-col'>
                                    <p>Iphone 14</p>
                                    <p>Apple Store</p>
                                </div>
                            </div>
                        </td>
                        <td className='py-2 pl-4'>7/11/2023</td>
                        <td className='py-2 pl-4 font-medium w-fit flex flex-col items-center'>
                            <p className='bg-green-200 text-green-400 p-2 w-fit rounded-lg'>Delivered</p>
                            <p className='text-green-400 p-2 w-fit'>Paid</p>
                        </td>
                        <td className='py-2 pl-4'>1999000 /-</td>
                        <td className='py-2 pl-4'>
                            <div className='flex items-center gap-1'>
                                <span class="material-symbols-outlined border-2 rounded-md text-blue-500 border-blue-400">
                                    visibility
                                </span> <span class="material-symbols-outlined border-2 rounded-md text-green-500 border-green-400">
                                    download
                                </span> <span class="material-symbols-outlined border-2 rounded-md text-red-500 border-red-400">
                                    delete
                                </span>
                                <span className='rounded-lg bg-purple-700 text-white p-2'>Order Again</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 pl-4'>1</td>
                        <td className='py-2 pl-4'>123456</td>
                        <td className='py-2 pl-4'>
                            <div className='flex gap-2'>
                                <img className='w-[50px] p-1 border-2 rounded-lg' src='https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-100,width-100,imgv-2/80635321.jpg' />
                                <div className='flex flex-col'>
                                    <p>Iphone 14</p>
                                    <p>Apple Store</p>
                                </div>
                            </div>
                        </td>
                        <td className='py-2 pl-4'>7/11/2023</td>
                        <td className='py-2 pl-4 font-medium w-fit flex flex-col items-center'>
                            <p className='bg-blue-200 text-blue-400 p-2 w-fit rounded-lg'>Pending</p>
                            <p className='text-red-400 p-2 w-fit'>UnPaid</p>
                        </td>
                        <td className='py-2 pl-4'>1999000 /-</td>
                        <td className='py-2 pl-4'>
                            <div className='flex items-center gap-1'>
                                <span class="material-symbols-outlined border-2 rounded-md text-blue-500 border-blue-400">
                                    visibility
                                </span> <span class="material-symbols-outlined border-2 rounded-md text-green-500 border-green-400">
                                    download
                                </span> <span class="material-symbols-outlined border-2 rounded-md text-red-500 border-red-400">
                                    delete
                                </span>
                                <span className='rounded-lg bg-purple-700 text-white p-2'>Order Again</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Order