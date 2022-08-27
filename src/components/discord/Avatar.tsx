import { LanyardUser } from '../../types/lanyard';
import { DiscordStatus } from './Status';

export default function Avatar(data: LanyardUser) {
  return (
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
  );
}