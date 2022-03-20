import Router from 'next/router';
import React, { useEffect } from 'react';
import Profile from '../components/Profile';
import { useSession } from 'next-auth/react';
import NotFound from '../components/NotFound';
import { ToastContainer } from 'react-toastify';

function Students({ students }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) Router.push('/login');
  }, [session]);

  console.log(students);
  return (
    <>
      <ToastContainer />
      {students.length == 0 && (
        <NotFound
          msg="No Student In Database"
          btnText="Add Student"
          onClick={() => Router.push('/addstudent')}
        />
      )}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {students?.map((student) => (
          <Profile
            key={student.usn}
            name={student.student_name}
            image={student.file_src}
            usn={student.usn}
            email={student.email}
            address={student.address}
            vaccinated={student.vaccinated}
            dob={student.dob}
            gender={student.gender}
            section={student.section}
            phone={student.phone}
            branch={student.branch}
            onClick={() => Router.push(`/student/${student.usn}`)}
          />
        ))}
      </main>
    </>
  );
}

export default Students;

export async function getServerSideProps(context) {
  const students = await fetch('http://localhost:5000/api/student').then(
    (res) => res.json(),
  );
  return {
    props: {
      students,
    },
  };
}
