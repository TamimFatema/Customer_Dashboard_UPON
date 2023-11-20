import React from 'react'

function EditPersonalDetails() {
    return (
        <div className="w-[1000px] bg-white p-5 rounded-lg">
            <h6 className='text-2xl font-bold mb-6'>Edit personal details</h6>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>First Name</p>
                    <input type='text' placeholder='Some' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Last Name</p>
                    <input type='text' placeholder='One' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Phone</p>
                    <input type='text' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Email</p>
                    <input type='text' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>New Password</p>
                    <input type='password' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Confirm password</p>
                    <input type='text' className='border-2 rounded-lg p-2 w-full' />
                </div>
            </div>

            <div className='my-6 flex justify-between'>
                <div>
                    <label for="profileImage" className='flex flex-col items-center border-2 border-dashed rounded-lg px-2 py-16'>
                        <span class="material-symbols-outlined">
                            upload
                        </span>
                        <p>Change your profile</p>
                    </label>
                    <input id="profileImage" type='file' className='hidden' />
                    <div className='flex flex-col items-center'>
                        <span>Image must be uploaded</span>
                        <span>in JPG,JPEG or PNG </span>
                    </div>
                </div>
                <div className='flex gap-2 h-fit self-end'>
                    <button className='text-white bg-green-600 px-4 py-2 rounded-lg'>Reset</button>
                    <button className='text-white bg-purple-700 px-4 py-2 rounded-lg'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditPersonalDetails