import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../../redux/actions/studentAction';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Box = ({ name, id, type, label, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="text-gray-700 " htmlFor={name}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    </div>
  );
};

function Edit({ student }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  });

  const initialState = {
    department: student.department,
    course: student.course,
    year: student.year,
    semester: student.semester,
    vaccinated: student.vaccinated,
    student_name: student.student_name,
    section: student.section,
    usn: student.usn,
    gender: student.gender,
    dob: student.dob,
    email: student.email,
    phone: student.phone,
    address: student.address,
    teacher_name: student.teacher_name,
    vaccine1: student.vaccine1,
    vaccine2: student.vaccine2,
    vaccine_name: student.vaccine_name,
    sem1: student.sem1,
    sem2: student.sem2,
    sem3: student.sem3,
    sem4: student.sem4,
    sem5: student.sem5,
    sem6: student.sem6,
    sem7: student.sem7,
    sem8: student.sem8,
    photo_sample: student.photo_sample,
  };

  const [userData, setUserData] = useState(initialState);
  const {
    department,
    course,
    year,
    semester,
    vaccinated,
    student_name,
    section,
    usn,
    gender,
    dob,
    email,
    phone,
    address,
    teacher_name,
    vaccine1,
    vaccine2,
    vaccine_name,
    sem1,
    sem2,
    sem3,
    sem4,
    sem5,
    sem6,
    sem7,
    sem8,
    photo_sample,
  } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateStudent(userData, student.usn));
    router.back();
    return toast.success('Successfully Updated');
  };

  return (
    <section className="mx-1 md:mx-10 p-6 mb-10">
      <h1 className="text-xl font-bold text-center text-gray-700 capitalize dark:text-gray-700">
        Edit {student.student_name}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          <Box
            label="Name"
            id="student_name"
            name="student_name"
            type="text"
            placeholder="Full Name"
            value={student_name}
            onChange={handleChangeInput}
          />

          <Box
            label="USN"
            id="usn"
            name="usn"
            type="text"
            placeholder="usn"
            value={usn}
            onChange={handleChangeInput}
          />

          <Box
            label="Section"
            id="section"
            name="section"
            type="text"
            placeholder="section"
            value={section}
            onChange={handleChangeInput}
          />

          <Box
            label="Department"
            id="department"
            name="department"
            type="text"
            placeholder="department"
            value={department}
            onChange={handleChangeInput}
          />

          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="semester">
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              value={semester}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select Semester
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="course">
              Course
            </label>
            <select
              id="course"
              name="course"
              required
              value={course}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select Course
              </option>
              <option>Computer Science</option>
              <option>Civil Engineering</option>
              <option>AI &apm; ML</option>
              <option>Mechanical Engineering</option>
              <option>Electrical Engineering</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="year">
              Year
            </label>
            <select
              id="year"
              required
              name="year"
              value={year}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select Year
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <Box
            label="DOB"
            id="date"
            name="dob"
            type="date"
            placeholder="date of birth"
            value={dob}
            onChange={handleChangeInput}
          />

          <Box
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleChangeInput}
          />
          <Box
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="phone"
            value={phone}
            onChange={handleChangeInput}
          />

          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <Box
            label="Address"
            id="address"
            name="address"
            type="text"
            placeholder="address"
            value={address}
            onChange={handleChangeInput}
          />

          <Box
            label="Teacher Name"
            id="teacher_name"
            name="teacher_name"
            type="text"
            placeholder="teacher name"
            value={teacher_name}
            onChange={handleChangeInput}
          />

          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="vaccinated">
              Vaccinated
            </label>
            <select
              id="vaccinated"
              required
              name="vaccinated"
              value={vaccinated}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select an Option
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="vaccinename">
              Vaccine Name
            </label>
            <select
              id="vaccine_name"
              name="vaccine_name"
              required
              value={vaccine_name}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select Vaccine Name
              </option>
              <option>Covishield</option>
              <option>Covaxin</option>
              <option>Moderna</option>
              <option>Johnson</option>
              <option>Sputnik</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="vaccine1">
              Dose 1
            </label>
            <select
              id="vaccine1"
              required
              name="vaccine1"
              value={vaccine1}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select an Option
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="vaccine2">
              Dose 2
            </label>
            <select
              id="vaccine2"
              required
              name="vaccine2"
              value={vaccine2}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select an Option
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <Box
            label="Sem 1"
            id="sem1"
            name="sem1"
            type="text"
            placeholder="sgpa"
            value={sem1}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 2"
            id="sem2"
            name="sem2"
            type="text"
            placeholder="sgpa"
            value={sem2}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 3"
            id="sem3"
            name="sem3"
            type="text"
            placeholder="sgpa"
            value={sem3}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 4"
            id="sem4"
            name="sem4"
            type="text"
            placeholder="sgpa"
            value={sem4}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 5"
            id="sem5"
            name="sem5"
            type="text"
            placeholder="sgpa"
            value={sem5}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 6"
            id="sem6"
            name="sem6"
            type="text"
            placeholder="sgpa"
            value={sem6}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 7"
            id="sem7"
            name="sem7"
            type="text"
            placeholder="sgpa"
            value={sem7}
            onChange={handleChangeInput}
          />
          <Box
            label="Sem 8"
            id="sem8"
            name="sem8"
            type="text"
            placeholder="sgpa"
            value={sem8}
            onChange={handleChangeInput}
          />

          <div>
            <label className="text-gray-700 shadow-sm " htmlFor="photosample">
              Photo Sample
            </label>
            <select
              id="photo_sample"
              name="photo_sample"
              required
              value={photo_sample}
              onChange={handleChangeInput}
              className="block w-full px-4 py-2 mt-2 text-gray-700 shadow-sm bg-white border border-gray-300 rounded-md    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="none" hidden>
                Select an Option
              </option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6 lg:justify-end lg:-mt-10">
          <button
            type="submit"
            className="px-6 py-2 leading-5 text-white shadow-sm transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Edit;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const student = await fetch(`http://localhost:5000/api/student/${id}`).then(
    (res) => res.json(),
  );
  return {
    props: {
      student,
    },
  };
}
