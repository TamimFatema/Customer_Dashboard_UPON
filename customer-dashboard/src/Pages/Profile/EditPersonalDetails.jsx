import React from 'react'

function EditPersonalDetails() {
    return (
        <div className="w-full md:w-[750px] mx-auto lg:mx-0 bg-white p-5 rounded-lg">
            <h6 className='text-2xl font-bold mb-6'>Edit personal details</h6>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>First Name</p>
                    <input type='text' placeholder='Mosraful' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Last Name</p>
                    <input type='text' placeholder='Habib' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Phone</p>
                    <input type='text' placeholder='01256389564' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Email</p>
                    <input type='text' placeholder='habib@gmail.com' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>New Password</p>
                    <input type='password' placeholder='Ex: 6+ characters' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Confirm password</p>
                    <input type='text' placeholder='Ex: 6+ characters' className='border-2 rounded-lg p-2 w-full' />
                </div>
            </div>

            <div className='my-6 flex justify-between'>
                <div className='w-40'>
                    <label for="profileImage" className='flex flex-col items-center border-2 border-dashed rounded-lg px-2 py-16'>
                        <span class="material-symbols-outlined">
                            upload
                        </span>
                        <p>Change your profile</p>
                    </label>
                    <input id="profileImage" type='file' className='hidden' />
                    <div className='flex flex-col text-center'>
                        <span>Image must be uploaded in JPG, JPEG or PNG format. Image ratio should be 1: 1 and maximum file size is 5 MB</span>
                    </div>
                </div>
                <div className='flex gap-2 h-fit self-end'>
                    <button className='text-white bg-[#0B8D5E] px-4 py-2 rounded-lg'>Reset</button>
                    <button className='text-white bg-[#5709BB] px-4 py-2 rounded-lg'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditPersonalDetails