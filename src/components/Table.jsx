

const Table = ({ students, setStudents, setFormValue, setDrawer, setEditIndex }) => {

    const deleteStudent = (index) => {
        const backup = [...students]
        backup.splice(index, 1)
        setStudents(backup)
    }

    const editStudent = (index) => {
        setDrawer(true)
        setFormValue(students[index])
        setEditIndex(index)
    }

    return (
        <table className='w-full'>
            <thead>
                <tr>
                    <th>s/No</th>
                    <th>Student`s Name</th>
                    <th>class</th>
                    <th>Roll Number</th>
                    <th>Subjects</th>
                    <th>DOB</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody className='text-center'>

                {
                    students.map(({ studentName, clas, roll, date, subject }, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{studentName}</td>
                            <td>{clas}</td>
                            <td>{roll}</td>
                            <td>{subject}</td>
                            <td>{date}</td>
                            <td className='flex justify-center items-center gap-5'>
                                <svg onClick={() => editStudent(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={25} fill="green"><path d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L11.9132 14.8422L9 11.9289L5 15.928V19H15.533L16.2414 19.0012L17.57 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"></path></svg>


                                <svg onClick={() => deleteStudent(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="red"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                            </td>
                        </tr>
                    ))
                }


            </tbody>
        </table>
    )
}

export default Table



