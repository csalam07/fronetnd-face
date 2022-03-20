import Router from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { FaGithubAlt } from 'react-icons/fa';

function HeroSection() {
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;
    console.log(search);
    Router.push(`/student/${search}`);
  };

  return (
    <section className="overflow-hidden" id="home">
      <div className="flex flex-col-reverse md:flex-row md:max-w-5xl lg:max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-start md:items-start space-y-16 h-auto md:h-full md:w-[50%] lg:mt-10 lg:max-w-lg">
          <div className="flex flex-col space-y-10 md:mt-10 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif capitalize text-center md:text-left ">
              Face Recognition <br />
              Student System
            </h1>
            <p className="text-xs md:text-sm">
              A facial recognition system is a technology capable of matching a
              human face from a digital image or a video frame against a
              database of faces, typically employed to authenticate users
              through ID verification services, works by pinpointing and
              measuring facial features from a given image
            </p>
          </div>
          <form
            className="flex w-full md:w-9/12 relative items-center justify-center"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search student..."
              className="w-full sm:max-w-sm lg:w-full border-0 outline-none
              bg-foodie-third rounded-full h-10 p-4 text-foodie-second
              placeholder-gray-400 text-sm shadow-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="submit"
              className="absolute right-0 md:translateX(10) lg:right-0 h-10 bg-blue-500 px-4 rounded-full text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
            >
              search
            </button>
          </form>

          <a
            href="https://github.com/snowwhite10"
            className="animate-bounce text-blue-400 text-3xl"
          >
            <FaGithubAlt />
          </a>
        </div>

        <div className="h-full md:w-[50%] flex ">
          <Image
            className="animate-[wiggle_3s_infinite_linear]"
            src="/image/san.png"
            alt="hero"
            objectFit="contain"
            height="700"
            width="700"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
