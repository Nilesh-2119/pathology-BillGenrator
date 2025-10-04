import React, { useContext, useState } from 'react'
import { patientContex } from './Contex/Contex';

function PatientSearch() {
    const { name, setName, age, setAge, phoneNumber, setPhoneNumber, date, setDate } = useContext(patientContex)



    return (
        <div>
            <div className=' p-5 bg-white m-3 rounded-3xl shadow-xl'>
                <p className='font-bold text-gray-600'>Patient Name (Required for saving record)</p>
                <div className='w-full mt-3'>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder='Enter Patient Name'
                        className='p-3 w-full  border-2 border-gray-400 rounded-xl'
                    />
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        placeholder='Age'
                        className='p-3 w-full  border-2 border-gray-400 rounded-xl mt-3'
                    />
                    <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="number"
                        placeholder='Phone Number'
                        className='p-3 w-full  border-2 border-gray-400 rounded-xl mt-3'
                    />
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className='p-3 w-full  border-2 border-gray-400 rounded-xl mt-3'
                    />
                </div>

            </div>
        </div>
    )
}

export default PatientSearch