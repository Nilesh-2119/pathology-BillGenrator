import { createContext, useState } from "react";
import { getDatabase, push, ref, set } from 'firebase/database';
import { app } from '../firebase/firebase';

const db = getDatabase(app);

export const patientContex = createContext()

export function PatientNameProvider({ children }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const today = new Date().toLocaleDateString('en-CA');
    const [date, setDate] = useState(today)

    const [test, setTest] = useState([])
    const grandTotal = test.reduce((sum, i) => sum + i.rate, 0);
    const testCount = test.reduce((sum) => sum + 1, 0)

    const handleAddbtn = (test) => {
        setTest((e) => {
            const exist = e.find((i) => i.testName === test.testName)
            if (exist) {
                return (e.filter((i) => i.testName !== test.testName))
            } else {
                return ([...e, test])
            }
        })
    }

    const putData = (name, test, age, phoneNumber, grandTotal, date, timeStamp) => {
        push(ref(db, "user/patientData"), {
            name: name,
            age: age,
            phoneNumber: phoneNumber,
            date: date,
            test: test,
            total: grandTotal,
            timeStamp: timeStamp,
        }

        )
    }
    // console.log(test);

    return (
        <patientContex.Provider value={{ name, setName, handleAddbtn, test, setTest, age, setAge, phoneNumber, setPhoneNumber, grandTotal, testCount, putData, date, setDate }}>
            {children}
        </patientContex.Provider>
    )
}