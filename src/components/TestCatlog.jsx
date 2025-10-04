import React, { useContext, useState } from 'react'
import { testList } from './TestList'
import { patientContex } from './Contex/Contex'

function TestCatlog() {
    const [search, setSearch] = useState('')
    const { handleAddbtn, test } = useContext(patientContex)

    const filteredTests = testList.filter(test =>
        test.testName.toLowerCase().includes(search.toLowerCase()) ||
        test.category.toLowerCase().includes(search.toLowerCase()) ||
        test.tube.toLowerCase().includes(search.toLowerCase())
    )




    return (
        <div className=' py-5 px-2 mx-5 bg-white rounded-2xl w-full md:w-full h-150 flex flex-col'>
            <div className=''>
                <h1 className='text-2xl text-gray-700 font-extrabold'>Test Catalog</h1> <br /><hr />
            </div>
            <div>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder='Search test name, category, or tube type...'
                    className='p-3 mt-7 w-full  border-2 border-gray-400 rounded-xl'
                />
            </div>

            <div className='flex-1 overflow-y-auto no-scrollbar'>
                {filteredTests.map((item, i) => {
                    return (

                        <div
                            onClick={() => handleAddbtn(item)}
                            key={i}
                            className={`border px-4 py-2 rounded-2xl mt-3 cursor-pointer
                                ${test.find((t) => t.testName === item.testName)
                                    ? "bg-indigo-100 border-indigo-500"
                                    : "bg-white border-gray-300"}`}
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                {/* Left Side */}
                                <div className="flex-1">
                                    <h1 className="font-bold text-lg">{item.testName}</h1>
                                    <p className="text-indigo-500 font-semibold">
                                        {test.category}{' '}
                                        <span className="text-gray-600 text-sm">{item.tube}</span>
                                    </p>
                                </div>

                                {/* Rate */}
                                <p className="text-gray-700 font-bold text-xl sm:text-2xl mr-5">{`₹ ${item.rate}`}</p>

                            </div>
                        </div>

                    )
                })}
            </div>



        </div>
    )
}

export default TestCatlog