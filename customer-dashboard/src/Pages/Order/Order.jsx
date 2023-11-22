import React from 'react'

function Order() {
    return (
        <div className="w-full md:w-[750px] mx-auto lg:mx-0 bg-white h-fit rounded-lg">
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

            <div className='w-full overflow-x-scroll md:overflow-auto'>
                <table className='table-fixed md:table-auto w-[200%] md:w-full text-sm'>
                    <thead className='bg-purple-100'>
                        <tr className='text-left'>
                            <th className='py-2 pl-4 w-[20%] md:w-fit'>SL</th>
                            <th className='py-2 pl-4 w-[20%] md:w-fit'>Order ID</th>
                            <th className='py-2 pl-4 w-[30%] md:w-fit'>Product Details</th>
                            <th className='py-2 pl-4 w-[30%] md:w-fit'>Date</th>
                            <th className='py-2 pl-4 w-[25%] md:w-fit'>Status</th>
                            <th className='py-2 pl-4 w-[25%] md:w-fit'>Amount</th>
                            <th className='py-2 pl-4 w-[50%] md:w-fit'>Action</th>
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

            <div class="flex text-sm items-center justify-end space-x-4 my-6 mx-3">
                <span class="material-symbols-outlined border py-2 px-2 rounded">
                    chevron_left
                </span>
                <button class="page-btn text-black border py-2 px-4 rounded">1</button>
                <button class="page-btn text-black border py-2 px-4 rounded">2</button>
                <button class="page-btn text-black border py-2 px-4 rounded">3</button>
                <span class="material-symbols-outlined border py-2 px-2 rounded">
                    chevron_right
                </span>
            </div>
        </div>
    )
}

export default Order