import React, { useState } from 'react'

function Header({ billSelector, setBillSelector }) {
    const [btnClass, setBtnClass] = useState(true);
    const btnColorClass = btnClass ? 'bg-indigo-500 hover:bg-indigo text-white' : 'bg-gray-300 hover:bg-gray-500';
    const btnColorClass2 = btnClass ? 'bg-gray-300 hover:bg-gray-500' : 'bg-indigo-500 hover:bg-indigo text-white';
    return (
        <div className='flex p-5 bg-white m-3 rounded-3xl flex-wrap justify-between shadow-xl border-b-4 border-indigo-500'>
            <div>
                <h1 className='text-3xl font-extrabold'>Lab Test Selector <span className='text-indigo-600'> Pro </span> </h1>
                <p className='text-x text-gray-500'>Collection boy interface for billing and record keeping.</p>
            </div>
            <div className='flex p-2'>
                <div>
                    <button
                        className={`btn ${btnColorClass} cursor-pointer py-2 px-4 mr-5 rounded-2xl m-2 font-semibold`}
                        onClick={() => {
                            setBillSelector(true)
                            setBtnClass(true);
                        }}
                    >Bill Selector</button>
                    <button
                        className={`btn ${btnColorClass2} cursor-pointer py-2 px-4 mr-5 rounded-2xl m-2 font-semibold`}
                        onClick={() => {
                            setBillSelector(false)
                            setBtnClass(false);
                        }}
                    >Daily Records</button>
                </div>
            </div>
        </div>
    )
}

export default Header