import React, { useContext, useState } from 'react'
import { patientContex } from './Contex/Contex'
import PopupBillSummary from './PopupBillSummary'

function BillSummary({ setSubmit }) {
    const [open, setOpen] = useState(false)
    const { name, test, age, phoneNumber, date, grandTotal, testCount, } = useContext(patientContex);
    const isDesabled = name == '' || testCount <= 0;


    return (
        <div className='p-4 w-full'>
            <div className='bg-indigo-600 rounded-2xl p-5'>
                <h1 className='text-white font-bold text-xl'>₹ Bill Summary</h1>
                <div className='bg-indigo-800 p-2 mt-5 rounded-2xl'>
                    <p className='text-gray-400'>Current Patient</p>
                    <p className='text-white     font-semibold'>{name}</p>
                </div>
                <div className='bg-indigo-800 p-2 mt-5 rounded-xl'>
                    <p className='text-gray-400'>Age</p>
                    <p className='text-white     font-semibold'>{age}</p>
                </div>
                <div className='bg-indigo-800 p-2 mt-5 rounded-xl'>
                    <p className='text-gray-400'>Phone</p>
                    <p className='text-white     font-semibold'>{phoneNumber}</p>
                </div>
                <div className='bg-indigo-800 p-2 mt-5 rounded-xl'>
                    <p className='text-gray-400'>Date</p>
                    <p className='text-white font-semibold'>{date}</p>
                </div>
                <div className='bg-indigo-800 p-4 mt-5 rounded-2xl'>
                    <p className='text-gray-400'>Total Test Selected</p>
                    <p className='text-white text-3xl font-bold'>{testCount}</p>
                </div>
                <div className=''>
                    {test.map((test, i) => {
                        return (<div key={i} className='flex mt-5 justify-between border-b-1 border-gray-500'>
                            <div>
                                <p className='text-white'>{test.testName}</p>
                            </div>
                            <div className='text-white font-bold ml-20'>₹{test.rate}</div>
                        </div>)
                    })
                    }


                </div>

                <div className='mt-9 flex justify-between'>
                    <h1 className='font-bold text-white text-xl'>GRAND TOTAL:</h1>
                    <h1 className='font-bold text-yellow-300 text-3xl'>₹{grandTotal}</h1>
                </div>

                <button
                    disabled={isDesabled}
                    onClick={() => {
                        setOpen(true);
                    }}
                    className={`w-full disabled:bg-gray-500 cursor-pointer bg-amber-400 hover:bg-amber-300 p-3 mt-5 font-semibold text-indigo-800 text-xl rounded-3xl`}>Confirm & Save Record</button>

            </div>
            {open ? <PopupBillSummary setOpen={setOpen} setSubmit={setSubmit} /> : null}


        </div>
    )
}

export default BillSummary