import Head from 'next/head';
import { useEffect, useState } from 'react';
import Profile from '../components/discord/Profile';
import Loading from '../components/Loading';
import { LanyardPresence } from '../types/lanyard';
import { lanyard } from '../utils/lanyard';

export default function IndexRoute() {
  const [status, setStatus] = useState<LanyardPresence>();

  function presenceChange(data: LanyardPresence) {
    setStatus(data || null);
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
        <meta name="description" content="My personal website." />
        <meta content="https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=512" property="og:image" />
      </Head>

      {status ? <Profile data={status} /> : <Loading />}
    </main>
  );
}
