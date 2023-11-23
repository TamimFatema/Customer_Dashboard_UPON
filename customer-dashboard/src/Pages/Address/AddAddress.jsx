import { React, useState } from 'react'

function AddAddress() {
    const [label, setLabel] = useState('home')

    const [selectedCountryOption, setSelectedCountryOption] = useState('bangladesh');

    const countries = [
        { value: 'bangladesh', label: 'Bangladesh' },
    ];

    const [selectedZipcodeOption, setSelectedZipcodeOption] = useState('1216');

    const zipcode = [
        { value: '1216', label: '1216' },
        { value: '1212', label: '1212' },
    ];

    const handleCountrySelect = (e) => {
        setSelectedCountryOption(e.target.value);
    };

    const handleZipcodeSelect = (e) => {
        setSelectedZipcodeOption(e.target.value);
    };

    return (
        <form className="w-full md:w-[750px] mx-auto lg:mx-0 bg-white p-5 rounded-lg">
            <h6 className='text-2xl font-bold mb-6'>Add address</h6>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm'>
                <div className='flex flex-col gap-3'>
                    <p className='font-medium'>Choose label</p>
                    <div className='flex gap-10'>
                        <div className='flex flex-col items-center'>
                            <span onClick={() => setLabel('home')} className={`material-symbols-outlined cursor-pointer border-2 rounded-full p-1 ${label == 'home' ? "bg-purple-600 text-white" : "text-purple-600"}  border-purple-600 `}>
                                home
                            </span>
                            <span className='text-xs'>Home</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span onClick={() => setLabel('permanent')} className={`material-symbols-outlined cursor-pointer border-2 rounded-full p-1 ${label == 'permanent' ? "bg-purple-600 text-white" : "text-purple-600"}  border-purple-600 `}>
                                attach_file
                            </span>
                            <span className='text-xs'>Permanent</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span onClick={() => setLabel('work')} className={`material-symbols-outlined cursor-pointer border-2 rounded-full p-1 ${label == 'work' ? "bg-purple-600 text-white" : "text-purple-600"}  border-purple-600 `}>
                                work
                            </span>
                            <span className='text-xs'>Work</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='font-medium'>Choose address type</p>
                    <div className='flex gap-5'>
                        <div className='flex gap-2 items-center'>
                            <input className='accent-purple-600' type="radio" id="shipping_address" name="address_type" value="Shipping Address" />
                            <label htmlFor="shipping_address">Shipping Address</label>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input className='accent-purple-600' type="radio" id="billing_address" name="address_type" value="Billing Address" />
                            <label htmlFor="billing_address">Billing Address</label>
                        </div>
                    </div>
                </div>

                <div className='sm:col-span-2 grid sm:grid-rows-4 sm:grid-flow-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='contactPerson' className='font-medium'>Contact Person</label>
                        <input id='contactPerson' type='text' placeholder='One' className='border-2 rounded-lg p-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='phone' className='font-medium'>Phone</label>
                        <input id='phone' type='text' placeholder='One' className='border-2 rounded-lg p-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="countrydropdown" className='font-medium'>Country</label>

                        <select
                            id="countrydropdown"
                            name="country"
                            className="w-full p-2 border-2 rounded-lg"
                            onChange={handleCountrySelect}
                            value={selectedCountryOption}
                        >
                            {countries.map((country) => (
                                <option key={country.value} value={country.value} >
                                    {country.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='city' className='font-medium'>City</label>
                        <input id='city' type='text' placeholder='One' className='border-2 rounded-lg p-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='zipcodedropdown' className='font-medium'>Zip Code</label>
                        <select
                            id="zipcodedropdown"
                            name="zipcode"
                            className="w-full p-2 border-2 rounded-lg"
                            onChange={handleZipcodeSelect}
                            value={selectedZipcodeOption}
                        >
                            {zipcode.map((zipcode) => (
                                <option key={zipcode.value} value={zipcode.value} >
                                    {zipcode.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 row-span-3'>
                        <label htmlFor='address' className='font-medium'>Address</label>
                        <textarea id='address' type='text' placeholder='One' className='border-2 rounded-lg p-2 w-full h-full' />
                    </div>

                </div>
                <div className='col-span-full flex gap-2 h-fit justify-end'>
                    <button className='text-white bg-green-600 px-4 py-2 rounded-lg'>Reset</button>
                    <button className='text-white bg-purple-700 px-4 py-2 rounded-lg'>Update</button>
                </div>
            </div>
        </form>
    )
}

export default AddAddress