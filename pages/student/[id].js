import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../../redux/actions/studentAction';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import NotFound from '../../components/NotFound';
import Image from 'next/image';

function Student({ errorCode, student }) {
  console.log(errorCode);
  if (errorCode) {
    return (
      <NotFound
        errorCode={errorCode}
        msg="No Student found"
        btnText="Go Back"
        onClick={() => Router.back()}
      />
    );
  }

  const dispatch = useDispatch();
  const router = useRouter();

  const firstName = student.student_name.split(' ').slice(0, -1).join(' ');
  const lastName = student.student_name.split(' ').slice(-1).join(' ');

  const [dp, setDp] = useState(student.file_src);

  const loc = `mailto:${student.email}`;

  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('usn', student.usn);
      const res = await axios.put(
        'http://localhost:5000/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setDp(res.data);
      toast.success('Profile Successfully Updated');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onDelete = (e) => {
    e.preventDefault();

    dispatch(deleteStudent(student.usn));
    router.back();
    return toast.success('Successfully Deleted');
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return (
    <div className={` bg-white min-h-screen transition duration-1000 ease-in`}>
      <Head>
        <title>
          {student.name} || {student.usn}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <div className="container mx-auto mb-20 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-white">
              <div className="image overflow-hidden flex justify-center">
                <Image
                  src={dp}
                  alt=""
                  height="400"
                  width="400"
                  loading="lazy"
                  objectFit="contain"
                  className=" rounded-full shadow-lg hover:shadow-xl hover:rounded-lg cursor-pointer"
                />
              </div>

              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 text-center mt-2">
                {student.student_name}, {getAge(student.dob)}
              </h1>

              <form
                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded-xl shadow-sm"
                encType="multipart/form-data"
                onSubmit={uploadFile}
              >
                <li className="flex items-center py-3 justify-center">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={saveFile}
                  />
                </li>
                <li className="flex items-center py-3 mx-auto justify-center">
                  <input
                    type="submit"
                    value="Change Pic"
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
                  />
                </li>
              </form>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm space-y-1">
              <h1 className="font-bold text-sm lg:text-xl">Bio</h1>

              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{firstName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{lastName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">
                      {student.gender == 'M' ? 'Male' : 'Female'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{student.phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">{student.address}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800" href={loc}>
                        {student.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">DOB</div>
                    <div className="px-4 py-2">{student.dob}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">USN</div>
                    <div className="px-4 py-2">{student.usn}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Department</div>
                    <div className="px-4 py-2">{student.department}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Section</div>
                    <div className="px-4 py-2">{student.section}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Course</div>
                    <div className="px-4 py-2">{student.course}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">{student.address}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Current Sem</div>
                    <div className="px-4 py-2">{student.semester}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Year</div>
                    <div className="px-4 py-2">{student.year}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Guide</div>
                    <div className="px-4 py-2">{student.teacher_name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Photo Sample</div>
                    <div className="px-4 py-2">{student.photo_sample}</div>
                  </div>
                </div>
              </div>

              <h1 className="font-bold text-sm lg:text-xl">Marks : SGPA</h1>

              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Fist Sem</div>
                    <div className="px-4 py-2">
                      {student.sem1 > 0 ? student.sem1 : 'No exam'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Second Sem</div>
                    <div className="px-4 py-2">
                      {student.sem3 > 0 ? student.sem3 : 'No exam'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Third Sem</div>
                    <div className="px-4 py-2">
                      {student.sem3 > 0 ? student.sem3 : 'No exam'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Fourth Sem</div>
                    <div className="px-4 py-2">
                      {student.sem4 > 0 ? student.sem4 : 'No exam'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Fifth Sem</div>
                    <div className="px-4 py-2">
                      {student.sem5 > 0 ? student.sem5 : 'No exam'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Sixth Sem</div>
                    <div className="px-4 py-2">
                      {student.sem6 > 0 ? student.sem6 : 'No exam'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Seventh</div>
                    <div className="px-4 py-2">
                      {student.sem7 > 0 ? student.sem7 : 'No exam'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Eighth Sem</div>
                    <div className="px-4 py-2">
                      {student.sem8 > 0 ? student.sem8 : 'No exam'}
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="font-bold text-sm lg:text-xl">
                Vaccination Detail
              </h1>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Vaccinated</div>
                    <div className="px-4 py-2">{student.vaccinated}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Vaccination Name
                    </div>
                    <div className="px-4 py-2">{student.vaccine_name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Firsr Dose</div>
                    <div className="px-4 py-2">{student.vaccine2}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Second Dose</div>
                    <div className="px-4 py-2">
                      {student.vaccine2 == 'Yes'
                        ? student.vaccine2
                        : student.vaccine_name == 'Johnson' || 'Sputnik'
                        ? '1 Dose is enogh'
                        : student.vaccine2}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-10 w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 sm:my-4 mt-5 mb-20">
                <button
                  onClick={() => router.push(`/edit/${student.usn}`)}
                  className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={onDelete}
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:5000/api/student/${id}`);
  const errorCode = res.ok ? false : true;
  const student = await res.json();

  return {
    props: {
      errorCode,
      student,
    },
  };
}
