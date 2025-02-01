import React from 'react'

export default function Studentlist({ displyStudentData, deletesStudentData }) {
    return (
        <div className='contins'>
            <h3>List of student</h3>
            <table border='1'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>AGE</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        displyStudentData?.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button className='deletebtn' onClick={() => deletesStudentData(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
