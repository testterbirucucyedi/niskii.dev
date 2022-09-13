import { LanyardPresence } from '../../types/lanyard';

function status(status: string) {
  if (!status) return 'fill-slate-500';

  switch (status) {
    case 'online':
      return 'fill-green-600';
    case 'idle':
      return 'fill-amber-400';
    case 'dnd':
      return 'fill-red-500';
    case 'offline':
      return 'fill-slate-500';
  }

  return 'fill-slate-500';
}

export default function Avatar(data: LanyardPresence) {
  return (
    <div role="img" aria-label="avatar" aria-hidden="false" className="w-[92px] h-[92px] border-[6px] relative rounded-full border-zinc-900">
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
                srcSet="https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=128,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=256 x2,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=512 x4"
                type="image/webp"
              />
              <source
                srcSet="https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=128,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=256 x2,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=512 x4"
                type="image/png"
              />
              <img
                src={`https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=80`}
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
        <circle cx="68" cy="68" r="8" className={status(data.discord_status)} />
      </svg>
    </div>
  );
}
