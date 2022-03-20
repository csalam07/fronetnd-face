import Image from 'next/image';
import { AiFillHome } from 'react-icons/ai';
import { RiGroupFill } from 'react-icons/ri';
import { HiBriefcase } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';
import { signOut, useSession } from 'next-auth/react';

import Router from 'next/router';
import NavItems from './NavItems';
import { useState } from 'react';

function Header() {
  const { data: session } = useSession();

  const [active, setActive] = useState('/');

  const navigateUser = (id) => {
    Router.push(id);
    setActive(id);
  };

  return (
    <header
      className={`${
        !session ? 'hidden' : 'bg-white shadow-sm z-50 !sticky top-0'
      } `}
    >
      <div className="flex items-center justify-between w-full lg:max-w-7xl mx-auto">
        <div className="flex space-x-6 p-2 mx-1 lg:mx-0 w-full">
          <div
            className="flex space-x-2 items-center text-sm font-bold font-serif cursor-pointer "
            onClick={() => navigateUser('/')}
          >
            <Image src="/image/logo.png" alt="logo" width={30} height={30} />
            <h1 className="uppercase">face recognition student system</h1>
          </div>
        </div>
        <nav
          className="left-0 bottom-0 z-50 bg-white border-t-2 shadow-xl md:px-4 md:shadow-none md:border-t-0 fixed md:top-0 md:sticky flex items-center 
         justify-between w-full md:max-w-lg lg:max-w-3xl p-4 md:p-0 text-xs cursor-pointer md:space-x-1"
        >
          <NavItems
            Icon={AiFillHome}
            title="Home"
            active={active === '/' ? true : false}
            onClick={() => navigateUser('/')}
          />
          <NavItems
            Icon={RiGroupFill}
            title="Students"
            active={active === '/students' ? true : false}
            onClick={() => navigateUser('/students')}
          />
          <NavItems
            Icon={HiBriefcase}
            title="Add"
            active={active === '/addstudent' ? true : false}
            onClick={() => navigateUser('/addstudent')}
          />

          <NavItems
            Icon={AiOutlineLogout}
            title="Logout"
            onClick={() => signOut()}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
