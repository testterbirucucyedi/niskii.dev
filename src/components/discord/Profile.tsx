import { useMemo } from 'react';
import { Data, useLanyardWs } from 'use-lanyard';

export function DiscordStatus(data: Data | undefined) {
  if (!data) return 'fill-gray-600';

  switch (data.discord_status) {
    case 'online':
      return 'fill-green-600';
    case 'idle':
      return 'fill-yellow-600';
    case 'dnd':
      return 'fill-red-500';
    case 'offline':
      return 'fill-gray-600';
  }

  return 'fill-gray-600';
}

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
            <div className="rounded-full">
              <div role="img" aria-label="avatar" aria-hidden="false" className="w-[92px] h-[92px] border-[6px] relative rounded-full border-slate-50 dark:border-zinc-900">
                <svg width="92" height="80" viewBox="0 0 92 80" className="absolute">
                  <defs>
                    <mask id="avatar-mask">
                      <circle cx="40" cy="40" r="40" fill="white" />
                      <circle cx="68" cy="68" r="14" fill="black" />
                    </mask>
                  </defs>

                  <foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
                    <div className="grid w-full h-full">
                      <picture>
                        <source
                          srcSet="https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=128,
													https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=256 x2,
													https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=512 x4"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=128,
													https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=256 x2,
													https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=512 x4"
                          type="image/png"
                        />
                        <img
                          src={`https://cdn.discordapp.com/avatars/847865068657836033/0e4af8bb37264cb531b3be782fe58ede.webp?size=80`}
                          alt="avatar"
                          width="80"
                          height="80"
                          aria-hidden="true"
                          draggable="false"
                          className="block"
                        />
                      </picture>
                    </div>
                  </foreignObject>
                  <circle cx="68" cy="68" r="8" className={DiscordStatus(data)} />
                </svg>
              </div>
            </div>
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
              <a className="text-blue-500 hover:text-blue-400 transition-all duration-300 delay-100" href="https://youtu.be/gQlMMD8auMs">
                https://youtu.be/gQlMMD8auMs
              </a>
            </div>

            <div className="w-full h-[1px] bg-slate-200 dark:bg-zinc-800 mb-3" />
            <div className="mb-3">
              <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">About Me</h2>
              <div className="whitespace-pre-line">
                <span className="inline-block">
                  <img src="/flag_br.svg" alt="flag_br" className="w-5 h-5 inline-block align-bottom" draggable="false" />
                </span>
                {' He/Him · Developer\n '}
                <span className="inline-block">
                  <img src="/heart.svg" alt="heart" className="w-5 h-5 inline-block align-bottom" draggable="false" />
                </span>{' '}
                <span className="inline-block">
                  <a className="text-blue-500 hover:text-blue-400 transition-all duration-300 delay-100" href="https://bot.denkylabs.com">
                    Denky Bot
                  </a>
                  {' Main Maintainer '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
