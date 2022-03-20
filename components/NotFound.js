import LottieAnim from './LottieAnim';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

function NotFound({ msg, btnText, onClick }) {
  useEffect(() => {
    toast.error(msg);
  }, []);
  return (
    <div className="flex items-center flex-col md:flex-row justify-center h-[90vh] mb-20">
      <ToastContainer />
      <LottieAnim src="/image/noStudent.json" size="300px" width="300px" />
      <div className="flex items-center jutify-center flex-col space-y-2">
        <h1>{msg}</h1>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl transform transition-all duration-300 hover:scale-105"
          onClick={onClick}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default NotFound;
