import Home from './components/Home'
import { useState } from 'react'
import Records from './components/patientsRecords/Records'
import Header from './components/Header'
import { PatientNameProvider } from './components/Contex/Contex';
import Success from './components/success/Success';

function App() {
  const [billSelector, setBillSelector] = useState(true);
  const [submit, setSubmit] = useState(false)



  return (
    <PatientNameProvider>
      <div className=''>

        {submit ? <Success setSubmit={setSubmit} setBillSelector={setBillSelector} /> : (
          <>
            <Header billSelector={billSelector} setBillSelector={setBillSelector} />
            {billSelector ? <Home setSubmit={setSubmit} /> : <Records />}
          </>
        )}


      </div>
    </PatientNameProvider>

  )
}

export default App