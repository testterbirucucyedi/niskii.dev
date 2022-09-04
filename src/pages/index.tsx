import Head from 'next/head';
import Profile from '../components/discord/Profile';

export default function IndexRoute() {
  return (
    <main className="flex mx-auto items-center justify-center h-screen w-screen">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://niskii.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Nicolas Ribeiro</title>
      </Head>

      <Profile />
    </main>
  );
}
