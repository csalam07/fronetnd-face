import React, { useState } from 'react';
import BtnLogin from './BtnLogin';

const Credential = ({ providers }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BtnLogin
      provider={providers.credentials}
      text="Login"
      options={{ redirect: false, email, password }}
    >
      <div>
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>

      <div className="mt-7">
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl px-3 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>

      <div className="mt-7 flex">
        <label
          htmlFor="remember_me"
          className="inline-flex items-center w-full cursor-pointer"
        >
          <input
            id="remember_me"
            type="checkbox"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="remember"
          />
          <span className="ml-2 text-sm text-gray-600">remember me</span>
        </label>

        <div className="w-full text-right">
          <a
            className="underline text-sm text-gray-600 hover:text-gray-900"
            href="#"
          >
            forgot password
          </a>
        </div>
      </div>
    </BtnLogin>
  );
};

export default Credential;
