import { useMemo } from 'react';
import { Data, useLanyardWs } from 'use-lanyard';
import About from './About';
import GameActivity from './activity/Game';
import SpotifyActivity from './activity/Spotify';
import Avatar from './Avatar';
import GitHubIcon from './icons/GitHubIcon';
import LinkIcon from './icons/LinkIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import TwitterIcon from './icons/TwitterIcon';

export default function Profile() {
  const data = useLanyardWs('847865068657836033');

  useMemo(() => {
    return data;
  }, [data]);

  return (
    <div className="w-[300px] dark:text-slate-200 drop-shadow-xl font-['Whitney']">
      <div className="rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-900">
        <div className="relative">
          <div className="w-full h-[120px] bg-center bg-[url('https://cdn.discordapp.com/banners/847865068657836033/a_876174be669e4ecc51e16f7700f5daed.gif?size=300')]" />

          <div className="absolute top-[76px] left-[16px]">
            <div className="rounded-full">{Avatar(data as Data)}</div>
          </div>

          <div className="pt-16 pb-3 px-4">
            <div className="text-xl font-semibold leading-6">
              <span className="text-zinc-900 dark:text-slate-50">Niskii</span>
              <span className="text-zinc-700 dark:text-slate-300">#6694</span>
            </div>
          </div>

          <div className="px-4 pb-3.5 flex-initial text-sm">
            <div className="pb-2.5">
              <img className="w-5 h-5 -my-px mr-1 float-left" draggable="false" src={`https://cdn.discordapp.com/emojis/1011667200106573976.gif`} alt="aRoseHearts" height={20} width={20} />
              <a className="text-blue-500 hover:underline underline-offset-2" href="https://youtu.be/gQlMMD8auMs">
                https://youtu.be/gQlMMD8auMs
              </a>
            </div>

            <div className="w-full h-[1px] bg-slate-200 dark:bg-zinc-800 mb-3" />
            <About />
            {data?.activities.find(x => x.type === 0) && GameActivity(data)}
            {data?.listening_to_spotify && SpotifyActivity(data)}

            <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">Connections</h2>
            <div className="flex flex-initial mt-3 flex-col flex-wrap items-stretch">
              <div className="h-10 mb-2 text-sm w-auto relative flex items-center px-4 justify-between text-white bg-zinc-500 dark:bg-zinc-700 rounded">
                <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
                  <GitHubIcon />
                  <span className="text-md font-semibold text-zinc-900 dark:text-white">whoisniskii</span>
                </div>
                <a href="/github">
                  <LinkIcon />
                </a>
              </div>

              <div className="h-10 mb-2 text-sm w-auto relative flex items-center px-4 justify-between text-white bg-zinc-500 dark:bg-zinc-700 rounded transition-colors">
                <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
                  <SpotifyIcon />
                  <span className="text-md font-semibold text-zinc-900 dark:text-white">yo, niskii</span>
                </div>
                <a href="/spotify">
                  <LinkIcon />
                </a>
              </div>

              <div className="h-10 text-sm w-auto relative flex items-center px-4 justify-between text-white bg-zinc-500 dark:bg-zinc-700 rounded transition-colors">
                <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
                  <TwitterIcon />
                  <span className="text-md font-semibold text-zinc-900 dark:text-white">whoisniskii</span>
                </div>
                <a href="/twitter">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
