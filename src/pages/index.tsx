import Head from 'next/head';
import { useLanyardWs } from 'use-lanyard';
import Profile from '../components/discord/Profile';
import Loading from '../components/Loading';

export default function IndexRoute() {
  const data = useLanyardWs('847865068657836033');

  return (
    <main className="flex mx-auto items-center justify-center h-screen w-screen">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://niskii.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Nicolas Ribeiro</title>
        <meta name="description" content="My personal website." />
        <meta content="https://cdn.discordapp.com/avatars/847865068657836033/3ce7cf30abd5b6108ba5cb03e60a7fb4.png?size=512" property="og:image" />
      </Head>

      {data ? <Profile data={data} /> : <Loading />}
    </main>
  );
}
