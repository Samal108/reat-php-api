import React, { useEffect, useState } from 'react'
import '../componet/curd.css';
import Studentlist from '../componet/Studentlist';

export default function Home() {
    const [student, setstudent] = useState();

    useEffect(() => {
        fetchStudent();
    }, []);
    const fetchStudent = async () => {
        console.log("React api call");
        try {
            let response = await fetch('http://localhost/collageapi/v1/retrive.php');
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

    return (
        <div>
            <Studentlist displyStudentData={student} deletesStudentData={deleteStudent} />
        </div>
    )
}
