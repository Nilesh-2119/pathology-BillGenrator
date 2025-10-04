import React, { useContext, useEffect, useState } from 'react'
import { getDatabase, ref, query, orderByChild, startAt, endAt, onValue } from 'firebase/database'
import { app } from '../firebase/firebase';
import { patientContex } from '../Contex/Contex';

function Records() {
    const { date } = useContext(patientContex)

    const [start, setStart] = useState(date);
    const [end, setEnd] = useState(date);

    const [patients, setPatients] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const db = getDatabase(app);

        if (start && end) {
            const startTime = new Date(start + "T00:00:00").getTime();
            const endTime = new Date(end + "T23:59:59").getTime();

            const patientsRef = query(
                ref(db, 'user/patientData'),
                orderByChild("timeStamp"),
                startAt(startTime),
                endAt(endTime)
            );

            onValue(patientsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setPatients(Object.values(data));
                } else {
                    setPatients([]);
                }
            });
        }
    }, [start, end]);

    // Filter patients by search query
    const filteredPatients = patients.filter(p => {
        if (!search) return true;
        const term = search.toLowerCase();
        return (
            p.name.toLowerCase().includes(term) ||
            p.phoneNumber.includes(term)
        );
    });

    return (
        <div className='px-1 py-2 md:px-20 md:py-5 bg-white m-5 rounded-2xl'>
            <div className='border-b-1 border-gray-300'>
                <h1 className='text-3xl font-bold'>Daily Collection Records</h1>
            </div>

            {/* Date Filters */}
            <div className='mx-2 mt-6 mb-3 flex flex-col md:flex-row items-center gap-3'>
                <h1 className='md:font-semibold md:text-xl md:mr-6'>Select Date:</h1>
                <input
                    type="date"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className='border p-2 px-4 rounded-xl border-gray-300'
                />
                <span className='mx-2'>To</span>
                <input
                    type="date"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    className='border p-2 px-4 rounded-xl border-gray-300'
                />
            </div>

            {/* Search Box */}
            <div className='mx-2 mb-6'>
                <input
                    type="text"
                    placeholder="Search by name or phone..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border p-2 px-4 rounded-xl border-gray-300 w-full'
                />
            </div>

            {/* Show filtered patients */}
            {filteredPatients.length === 0 && (
                <p className='text-gray-500 text-center mt-5'>No records found</p>
            )}

            {filteredPatients.map((p, i) => (
                <div key={i} className='px-3 py-3 mt-3 bg-gray-100 border-l-4 border-indigo-600 rounded-xl'>
                    <div className='flex justify-between border-b border-gray-300'>
                        <div>
                            <h1 className="font-bold">{p.name}</h1>
                            <p className="text-sm text-gray-600">📞 {p.phoneNumber}</p>
                        </div>
                        <h1 className='text-green-600 font-bold text-xl'>₹{p.total}</h1>
                    </div>
                    <h1 className='text-gray-500 mt-1'>Date: {p.date}</h1>
                    <div className='px-2 py-1 overflow-scroll h-40 no-scrollbar'>
                        <h1 className='font-bold'>Tests ({p.test.length})</h1>
                        {p.test.map((t, idx) => (
                            <div key={idx} className='flex text-sm justify-between '>
                                <h1>{t.testName}</h1>
                                <h1 className='font-semibold'>₹{t.rate}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Records
