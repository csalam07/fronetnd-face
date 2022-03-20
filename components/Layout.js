import Header from './header/Header';
import Menu from './header/Menu';

import { useSession } from 'next-auth/react';

function layout({ children }) {
  const { data: session } = useSession();

  return (
    <div className={` bg-white transition duration-1000 ease-in `}>
      {!session && <Menu />}
      {session && <Header />}
      <div className="lg:mx-24">{children}</div>
    </div>
  );
}

export default layout;
