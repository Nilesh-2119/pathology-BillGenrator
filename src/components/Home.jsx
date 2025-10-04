import React from 'react'
import PatientSearch from './PatientSearch'
import TestCatlog from './TestCatlog'
import BillSummary from './BillSummary'
import Header from './Header'

function Home({ setSubmit }) {
    return (
        <div >
            <PatientSearch />
            <div className='flex flex-wrap md:flex-nowrap'>
                <TestCatlog />
                <BillSummary setSubmit={setSubmit} />
            </div>
        </div>

    )
}

export default Home