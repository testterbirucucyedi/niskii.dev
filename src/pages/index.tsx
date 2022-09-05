import Head from 'next/head';
import { useLanyardWs } from 'use-lanyard';
import Profile from '../components/discord/Profile';

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
      </Head>

      {data ? (
        <Profile data={data} />
      ) : (
        <svg className="animate-spin" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18" />
            </g>
          </g>
        </svg>
      )}
    </main>
  );
}
