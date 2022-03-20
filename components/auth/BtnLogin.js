import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { useDispatch } from 'react-redux';

const BtnLogin = ({ children, provider, text, options }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(provider.id, options);

    if (provider.id === 'credentials') {
      if (res.error) {
        if (res.error === 'Success! Check your email.') {
          signIn('email', { email: options.email });
          return toast.success(res.error);
        }
        return toast.error(res.error);
      }
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: 'Login Sucess',
        },
      });
      return Router.push('/');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {children}

      <div className="mt-7">
        <button
          type="submit"
          className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
        >
          {text}
        </button>
      </div>
    </form>
  );
};
export default BtnLogin;
