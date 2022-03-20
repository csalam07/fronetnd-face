import Image from 'next/image';

function Profile({ name, image, usn, address, vaccinated, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-200 p-4 shadow-md rounded-lg m-3 cursor-pointer group hover:shadow-inner"
      onClick={onClick}
    >
      <div className="inline-flex shadow-inner border border-white rounded-full overflow-hidden h-40 w-40 transform transition-all transition-duration duration-200 group-hover:scale-105 group-hover:shadow-2xl">
        <Image
          src={image}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          height="400"
          width="400"
        />
      </div>
      <h2 className="mt-4 font-bold text-xl">{name}</h2>
      <h6 className="mt-2 text-sm font-medium">{usn}</h6>

      <div>
        <p className="text-xs text-gray-500 text-center mt-3">
          From {address} &amp; {vaccinated ? 'Vaccinated' : 'Not Vaccinated'}
        </p>
      </div>
    </div>
  );
}

export default Profile;
