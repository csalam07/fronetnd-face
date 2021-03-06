import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      console.log('/login');
    }
  }, [session]);
  return <HeroSection />;
}
