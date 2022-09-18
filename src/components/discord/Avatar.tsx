import { LanyardPresence } from '../../types/lanyard';
import { AvatarMask, StatusDnd, StatusIdle, StatusOffline } from './Masks';
import Status from './Status';

export default function Avatar(data: LanyardPresence) {
  return (
    <div role="img" aria-label="avatar" aria-hidden="false" className="w-[92px] h-[92px] border-[6px] relative rounded-full border-zinc-900">
      <svg width="92" height="80" viewBox="0 0 92 80" className="absolute">
        <defs>
          <AvatarMask />
          <StatusOffline />
          <StatusDnd />
          <StatusIdle />
        </defs>
        <foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
          <div className="grid w-full h-full">
            <picture>
              <source
                srcSet="https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=128 1x,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=256 2x,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.webp?size=512 4x"
                type="image/webp"
              />
              <source
                srcSet="https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=128 1x,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=256 2x,
                https://cdn.discordapp.com/avatars/847865068657836033/47978c9be525f305379d17dcff2d86a2.png?size=512 4x"
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

        {Status(data)}
      </svg>
    </div>
  );
}
