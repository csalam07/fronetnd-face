import React, { useEffect } from 'react';
import { getProviders, getSession } from 'next-auth/react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Credentials from '../components/auth/CredentialsRegister';

const Register = ({ providers, session }) => {
  useEffect(() => {
    if (session) return Router.push('/');
  }, [session]);

  useEffect(() => {
    if (Router.query.error) {
      toast.error(Router.query.error);
      return Router.push('/register');
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full  flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-lg"
            style={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
            }}
          ></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>

            <Credentials providers={providers} />
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <p className="inline-block text-sm  align-baseline hover:text-blue-800">
                Already have an account?{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => Router.push('/login')}
                >
                  Login!
                </span>
              </p>
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
export default Register;
