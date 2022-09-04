import Head from 'next/head';
import Profile from '../components/discord/Profile';

export default function IndexRoute() {
  return (
    <main className="w-full max-w-full h-full justify-center items-center mx-auto">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://niskii.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Nicolas Ribeiro</title>
      </Head>

      <div className="container mx-auto py-[100px] flex items-center justify-center">
        <Profile />
      </div>
    </main>
  );
}
