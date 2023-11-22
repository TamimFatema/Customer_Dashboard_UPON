import React from 'react'

function Wishlist() {
    return (
        <div className="w-full md:w-[750px] mx-auto lg:mx-0 bg-white h-fit rounded-lg">
            <div className='flex justify-between p-4'>
                <h6 className='font-bold text-2xl'>Wishlist</h6>
                <p className='underline text-red-700 font-bold'>Clear all</p>
            </div>
            <div className='w-full overflow-x-scroll md:overflow-auto'>
                <table className='table-fixed md:table-auto w-[200%] md:w-full text-sm'>
                    <thead className='bg-purple-100'>
                        <tr className='text-left'>
                            <th className='py-2 pl-4 w-[20%] md:w-fit'>SL</th>
                            <th className='py-2 pl-4 w-[60%] md:w-fit'>Product Details</th>
                            <th className='py-2 pl-4 w-[20%] md:w-fit'>Brand</th>
                            <th className='py-2 pl-4 w-[40%] md:w-fit'>Amount</th>
                            <th className='py-2 pl-4 w-[60%] md:w-fit'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2 pl-4'>1</td>
                            <td className='py-2 pl-4'>
                                <div className='flex gap-2'>
                                    <img className='w-[50px] p-1 border-2 rounded-lg' src='https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-100,width-100,imgv-2/80635321.jpg' />
                                    <div className='flex flex-col'>
                                        <p>Iphone 14</p>
                                    </div>
                                </div>
                            </td>
                            <td className='py-2 pl-4'>Apple</td>
                            <td className='py-2 pl-4'>1999000 /-</td>
                            <td className='py-2 pl-4'>
                                <div className='flex items-center gap-1'>
                                    <span class="material-symbols-outlined border-2 rounded-md text-red-500 border-red-400">
                                        delete
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 pl-4'>1</td>
                            <td className='py-2 pl-4'>
                                <div className='flex gap-2'>
                                    <img className='w-[50px] p-1 border-2 rounded-lg' src='https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-100,width-100,imgv-2/80635321.jpg' />
                                    <div className='flex flex-col'>
                                        <p>Iphone 14</p>
                                    </div>
                                </div>
                            </td>
                            <td className='py-2 pl-4'>Apple</td>
                            <td className='py-2 pl-4'>1999000 /-</td>
                            <td className='py-2 pl-4'>
                                <div className='flex items-center gap-1'>
                                    <span class="material-symbols-outlined border-2 rounded-md text-red-500 border-red-400">
                                        delete
                                    </span>
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

export default Wishlist