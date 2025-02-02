import React, { useEffect, useState } from 'react'
import '../componet/curd.css';
import Studentlist from '../componet/Studentlist';
import StudentAdd from '../componet/StudentAdd';

export default function Home() {
    const [student, setstudent] = useState();

    useEffect(() => {
        fetchStudent();
    }, []);
    const fetchStudent = async () => {
        console.log("React api call");
        try {
            let response = await fetch(`http://localhost/collageapi/v1/retrive.php`);
            let data = await response.json();
            if (data.status === 1) {
                console.log(data.resData);
                setstudent(data.resData);
            }
        } catch (error) {
            console.error('error retriveing  student:', error);

        }

    };
    //delete
    const deleteStudent = async (stId) => {
        console.log('delete api call');
        try {
            let response = await fetch(`http://localhost/collageapi/v1/delete.php?id=${stId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                let updateStudent = student.filter((std) => std.id !== stId)
                setstudent(updateStudent);
            }

        } catch (error) {
            console.error('error deleting student:', error);

        }
    };
    //CREATE
    const addStudent = async (stdData) => {
        const response = fetch(`http://localhost/collageapi/v1/create.php`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(stdData)

        });
        if (response.ok) {
            fetchStudent();
        }
    }

    return (
        <div>
            <>
                <StudentAdd createStudent={addStudent} />
                <Studentlist displyStudentData={student} deletesStudentData={deleteStudent} />
            </>

        </div>
    )
}
