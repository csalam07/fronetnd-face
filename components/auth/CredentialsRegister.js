import React, { useState } from 'react';
import BtnSignup from './BtnSignup';

const CredentialRegister = ({ providers }) => {
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    dept: '',
    address: '',
    password: '',
    confirm_password: '',
    contact: '',
    securityQ: '',
    securityA: '',
  };

  const [userData, setUserData] = useState(initialState);
  const {
    fname,
    lname,
    contact,
    email,
    dept,
    address,
    password,
    confirm_password,
    securityQ,
    securityA,
  } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <BtnSignup
      provider={providers.credentials}
      text="Register"
      options={userData}
    >
      <div class="mb-4 ">
        <div>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="first name"
            required
            value={fname}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="last name"
            required
            value={lname}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="contact no."
            required
            value={contact}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="text"
            id="dept"
            name="dept"
            placeholder="department"
            required
            value={dept}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address"
            required
            value={address}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="confirm password"
            required
            value={confirm_password}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="text"
            id="securityQ"
            name="securityQ"
            placeholder="Security Question"
            required
            value={securityQ}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div className="mt-7">
          <input
            type="text"
            id="securityA"
            name="securityA"
            placeholder="Security Answer"
            required
            value={securityA}
            onChange={handleChangeInput}
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>
      </div>
    </BtnSignup>
  );
};

export default CredentialRegister;
