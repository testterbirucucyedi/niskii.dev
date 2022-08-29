import { useMemo } from 'react';
import { Data, useLanyardWs } from 'use-lanyard';
import GameActivity from './activity/Game';
import SpotifyActivity from './activity/Spotify';
import Avatar from './Avatar';

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
              <span className="dark:text-slate-300">#6694</span>
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
            <div className="mb-3">
              <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">About Me</h2>
              <div className="whitespace-pre-line">
                <span className="inline-block">
                  <img src="/flag-br.svg" alt="flag-br" className="w-5 h-5 inline-block align-bottom" draggable="false" />
                  {' He/Him · '}
                  <a href="https://www.16personalities.com/istp-personality" className="hover:underline underline-offset-2">
                    {' ISTP-T · '}
                  </a>
                  {' Developer \n\n'}
                </span>

                <span className="inline-block">
                  <img src="/small-blue-diamond.svg" alt="small-blue-diamond" className="w-5 h-5 inline-block align-bottom" draggable="false" />
                  <a href="https://github.com/denkylabs" className="text-blue-500 hover:underline underline-offset-2">
                    {' Denky Labs '}
                  </a>
                  {' Co-Founder\n '}
                </span>

                <span className="inline-block">
                  <img src="/small-blue-diamond.svg" alt="small-blue-diamond" className="w-5 h-5 inline-block align-bottom" draggable="false" />
                  <a href="https://bot.denkylabs.com" className="text-blue-500  hover:underline underline-offset-2">
                    {' Denky Bot '}
                  </a>
                  {' Core Maintainer '}
                </span>
              </div>
            </div>
            {data?.activities.find(x => x.type === 0) && GameActivity(data)}
            {data?.listening_to_spotify && SpotifyActivity(data)}
          </div>
        </div>
      </div>
    </div>
  );
}
