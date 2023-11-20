import React from 'react'

function Wishlist() {
    return (
        <div className="w-[1000px] bg-white h-fit rounded-lg">
            <div className='flex justify-between p-4'>
                <h6 className='font-bold text-2xl'>Wishlist</h6>
                <p className='underline text-red-700 font-bold'>Clear all</p>
            </div>
            <table className='table-auto w-full'>
                <thead className='bg-purple-100'>
                    <tr className='text-left'>
                        <th className='py-2 pl-4'>SL</th>
                        <th className='py-2 pl-4'>Product Details</th>
                        <th className='py-2 pl-4'>Brand</th>
                        <th className='py-2 pl-4'>Amount</th>
                        <th className='py-2 pl-4'>Action</th>
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
    )
}

export default Wishlist