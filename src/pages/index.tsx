import Head from 'next/head';
import Profile from '../components/discord/Profile';

export default function IndexRoute() {
  return (
    <main className="w-full max-w-full max-h-full justify-center overflow-y-auto">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://niskii.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nicolas Ribeiro</title>
      </Head>

      <div className="container mx-auto flex px-5 xl:py-48 py-40 md:flex-row flex-col items-center justify-center">
        <Profile />
      </div>
    </main>
  );
}
