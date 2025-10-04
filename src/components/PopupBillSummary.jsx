import React, { useContext } from 'react'
import { patientContex } from './Contex/Contex'

function PopupBillSummary({ setOpen, setSubmit }) {
    const { grandTotal, name, age, phoneNumber, testCount, test, putData, date } = useContext(patientContex);

    const timeStamp = new Date(date).getTime();

    return (
        <div className='bg-gray-800/80 z-50 fixed inset-0 px-5 py-4 md:py-4 md:px-40 overflow-auto'>
            <div className=' bg-white rounded-2xl '>
                <div className='flex justify-between w-full bg-indigo-800 rounded-t-2xl p-2'>
                    <div className='text-xl font-bold text-white '>
                        Final Bill & Save Records
                    </div>
                    <div onClick={() => setOpen(false)} className='text-white text-2xl cursor-pointer mx-2'>
                        X
                    </div>
                </div>
                <div className='bg-white p-3'>
                    <h1 className='text-l font-bold'>Confirm the amount to inform the patient.</h1>
                </div>
                <div className='p-2 '>
                    <div className=' p-4 bg-yellow-50 border-1 border-yellow-300 rounded-2xl'>
                        <h1 className='text-l font-bold text-gray-600'>Patient Name: {name}</h1>
                        <h1 className='text-l font-bold text-gray-600'> Age: {age}</h1>
                        <h1 className='text-l font-bold text-gray-600'> Date: {date}</h1>
                        <h1 className='text-l font-bold text-gray-600'>Phone Number: {phoneNumber}</h1>
                        <h1 className='text-xl font-bold text-indigo-600 mt-2'>Total Payable: <span className='text-indigo-800 text-3xl'>₹{grandTotal}.00</span> </h1>
                    </div>
                </div>

                <div className='p-2'>
                    <h1 className='text-gray-700 font-bold '>Selected Test ({testCount})</h1>
                    <div className='border-1 border-gray-500 rounded-2xl p-2 h-60 overflow-auto'>
                        {test.map((i) => { return (<h1 key={i.name} className=' my-3 text-sm'>- {i.testName} <span className='text-indigo-800'>({i.tube})</span></h1>) })}
                    </div>
                </div>

                <div className='p-2'>
                    <button
                        onClick={() => {
                            putData(name, test, age, phoneNumber, grandTotal, date, timeStamp)
                            setSubmit(true);
                        }}
                        className='btn bg-green-400 px-2 py-3.5 rounded-3xl w-full text-xl font-extrabold text-white'>Confirm and Save</button>
                </div>
                <div className='p-2'>
                    <button
                        onClick={() => setOpen(false)}
                        className='btn bg-gray-300 px-2 py-3.5 rounded-3xl w-full text-l font-semibold'>Cancel</button>
                </div>
            </div>
        </div >
    )
}

export default PopupBillSummary