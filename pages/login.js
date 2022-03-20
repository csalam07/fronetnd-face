import React, { useEffect } from 'react';
import { getProviders, getSession } from 'next-auth/react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Credentials from '../components/auth/Credentials';

const Login = ({ providers, session }) => {
  console.log(session);
  useEffect(() => {
    if (session) return Router.push('/');
  }, [session]);

  useEffect(() => {
    if (Router.query.error) {
      toast.error(Router.query.error);
      return Router.push('/login');
    }
  }, []);

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col justify-center items-center mx-6">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <Credentials providers={providers} />
            <div className="mt-7">
              <div className="flex justify-center items-center">
                <label className="mr-2">Not a user?</label>
                <p
                  onClick={() => Router.push('/register')}
                  className="cursor-pointer underline text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Register
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await getProviders(context),
      session: await getSession(context),
    },
  };
}

export default Login;
