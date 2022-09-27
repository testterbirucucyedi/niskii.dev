import Head from 'next/head';
import { useEffect, useState } from 'react';
import Profile from '../components/discord/Profile';
import Loading from '../components/Loading';
import { LanyardUser } from '../types/lanyard';
import { lanyard } from '../utils/lanyard';

export default function Home() {
  const [status, setStatus] = useState<LanyardUser>();

  function presenceChange(data: LanyardUser) {
    setStatus(data ?? null);
  }

  useEffect(() => {
    lanyard.on('presence', presenceChange);

    return () => {
      lanyard.removeListener('presence', presenceChange);
    };
  }, []);

  return (
    <main className="flex mx-auto items-center justify-center h-screen w-screen">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://niskii.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Nicolas Ribeiro</title>
        <meta name="description" content="Nicolas Ribeiro's personal website and portfolio." />
        <meta content="/images/avatar-512.png" property="og:image" />
      </Head>

      {status ? <Profile data={status} /> : <Loading />}
    </main>
  );
}
