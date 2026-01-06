// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import Table from './Table'

const Drawer = ({ setDrawer, drawer }) => {
    const emptyForInputValue = {
        studentName: '',
        clas: '',
        roll: '',
        subject: '',
        date: ''
    }
    const [editIndex, setEditIndex] = useState(null)
    const [students, setStudents] = useState([])
    const [formValue, setFormValue] = useState({
        studentName: '',
        clas: '',
        roll: '',
        subject: '',
        date: ''
    })

    const handelInput = (e) => {
        const input = e.target
        const value = input.value
        const key = input.name
        setFormValue({
            ...formValue,
            [key]: value
        })
    }

    const createStudents = (e) => {
        e.preventDefault()
        setStudents([
            ...students,
            formValue
        ])
        setFormValue(emptyForInputValue)
        setDrawer(false)

    }

    const saveStudent = (e) => {
        e.preventDefault()
        const backup = [...students]
        backup[editIndex] = formValue
        setStudents(backup)
        setFormValue(emptyForInputValue)
        setEditIndex(null)
        setDrawer(false)
    }

    const closeButton = () => {
        setDrawer(false)
        setFormValue(emptyForInputValue)
        setEditIndex(null)
    }

    return (
        <>
            <div className='w-9/12 bg-white mx-auto px-5'>
                <h1 className='text-center py-5'>CRUD-APP</h1>

                <div className='flex justify-between'>
                    <button onClick={() => setDrawer(!drawer)} className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer"><i className="ri-user-add-line"></i> New Student
                    </button>
                    {
                        students.length !== 0 && <h3>{students.length === 1 ? 'Total Student' : 'Total Students'} : {students.length}</h3>
                    }
                </div>

                <div className="py-5">
                    <Table students={students} setStudents={setStudents} setFormValue={setFormValue} setDrawer={setDrawer} setEditIndex={setEditIndex} />
                </div>
            </div>
            {
                drawer &&
                <motion.div

                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={` fixed top-0 right-0 w-md bg-white shadow-2xl  p-10 h-screen`}>
                    <h2 className='relative'>My Drawer</h2>

                    <i
                        onClick={closeButton}
                        title='Close'
                        className=" absolute right-5 cursor-pointer top-5 ri-close-large-line bg-indigo-600 text-white py-2 px-3 rounded-full hover:scale-105 hover:text-white hover:bg-red-400 transition-all duration-300 hover:shadow-2xl">

                    </i>

                    <form onSubmit={editIndex === null ? createStudents : saveStudent} className='flex flex-col justify-center items-center mt-5 gap-y-5'>
                        <div className='flex flex-col'>
                            <label>Student Name</label>
                            <input
                                value={formValue.studentName}
                                onChange={handelInput}
                                required
                                type="text"
                                name='studentName'
                                placeholder='Enter Student name'
                                className='border outline-none w-90 p-3 rounded-sm mt-2'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label>Class</label>
                            <input
                                value={formValue.clas}
                                onChange={handelInput}
                                required
                                type="number"
                                name='clas'
                                placeholder='Enter your Class'
                                className='border outline-none w-90 p-3 rounded-sm mt-2'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label>Roll Number</label>
                            <input
                                value={formValue.roll}
                                onChange={handelInput}
                                required
                                type="number"
                                name='roll'
                                placeholder='Enter your roll number'
                                className='border outline-none w-90 p-3 rounded-sm mt-2'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label>Subject</label>
                            <input
                                value={formValue.subject}
                                onChange={handelInput}
                                required
                                type="text"
                                name='subject'
                                placeholder='Enter your Subject'
                                className='border outline-none w-90 p-3 rounded-sm mt-2'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label>Date</label>
                            <input
                                value={formValue.date}
                                onChange={handelInput}
                                required
                                type="date"
                                name='date'
                                className='border outline-none w-90 p-3 rounded-sm mt-2'
                            />
                        </div>
                        <div>
                            {
                                editIndex === null ? <div className='bg-indigo-600 p-3 text-white rounded-lg flex gap-x-2 hover:bg-green-600 transition-all duration-300 cursor-pointer'>
                                    <i className="ri-add-circle-line cursor-pointer"></i>
                                    <button type='submit' className='cursor-pointer'>Add Student</button>
                                </div> :
                                    <button type='submit'
                                        onClick={saveStudent}
                                        className='cursor-pointer py-3 px-10 bg-indigo-600 text-white rounded-lg'> Save</button>
                            }


                        </div>

                    </form>
                </motion.div>
            }

        </>
    )
}

export default Drawer