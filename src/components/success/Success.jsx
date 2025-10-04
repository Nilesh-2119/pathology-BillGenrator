import React from 'react'

function Success({ setSubmit, setBillSelector }) {
    return (
        <div className='mt-50 p-5 md:p-10'>
            <div className='p-5 border-1 border-gray-300 rounded-2xl bg-indigo-100 md:p-20'>
                <h1 className='text-indigo-700 text-5xl font-extrabold text-center'>Successfull</h1>
                <div className='flex flex-wrap justify-between mt-10 md:p-10 md:mx-80'>
                    <button
                        onClick={() => setSubmit(false)}
                        className='bg-indigo-400 px-5 py-2 rounded-2xl text-white font-bold text-xl'>Home</button>
                    <button
                        onClick={() => {
                            setSubmit(false)
                            setBillSelector(false)
                        }}
                        className='bg-gray-300 px-5 py-2 rounded-2xl font-bold text-xl'>Daily Records</button>
                </div>
            </div>
        </div>
    )
}

export default Success