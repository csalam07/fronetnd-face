import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/authAction';

const BtnSignup = ({ children, text, options }) => {
  const dispatch = useDispatch();

  const registerUser = async (event) => {
    event.preventDefault();
    dispatch(register(options));
    return Router.push('/login');
  };
  return (
    <form
      onSubmit={registerUser}
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
    >
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

BtnSignup.defaultProps = {
  txtColor: '#eee',
};
export default BtnSignup;
