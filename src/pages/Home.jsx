import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Home — Personal Space';
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}
