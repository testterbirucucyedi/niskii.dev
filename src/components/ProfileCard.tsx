import { LanyardUser } from '../types/lanyard';
import { AboutCard } from './AboutCard';
import { CustomCard } from './activity/CustomCard';
import { GameCard } from './activity/GameCard';
import { SpotifyCard } from './activity/SpotifyCard';
import { Avatar } from './Avatar';
import { ConnectionsCard } from './ConnectionsCard';

interface CardProps {
  data: LanyardUser;
}

export function ProfileCard({ data }: CardProps) {
  const game = data.activities.find(x => x.type === 0);
  const custom = data.activities.find(x => x.type === 4);

  return (
    <div className="w-[300px] text-slate-200 drop-shadow-xl">
      <div className="rounded-2xl overflow-hidden bg-zinc-900">
        <div className="relative">
          {/* Banner */}
          <picture>
            <source type="image/webp" srcSet="/images/banner.webp" />
            <source type="image/png" srcSet="/images/banner.png" />
            <img src="/images/banner.webp" alt="banner" width="300" height="120" aria-hidden="true" draggable="false" className="block" />
          </picture>

          {/* Avatar */}
          <div className="absolute top-[76px] left-[16px]">
            <div className="rounded-full">
              <Avatar data={data} />
            </div>
          </div>

          {/* Username and tag */}
          <div className="pt-14 pb-3 px-4">
            <div className="text-xl font-semibold leading-6">
              <span className="text-slate-50">{data.discord_user.username}</span>
              <span className="text-slate-300">#{data.discord_user.discriminator}</span>
            </div>
          </div>

          <div className="px-4 pb-3.5 flex-initial text-sm">
            {/* Custom Activity */}
            {custom && (
              <div className="pb-2.5">
                <CustomCard activity={custom} />
              </div>
            )}

            <div className="w-full h-[1px] bg-zinc-800 mb-3" />

            {/* About me */}
            <AboutCard />

            {/* <div className="mb-3">
              <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Discord Member Since</h2>
              <span className="whitespace-pre-line text-normal">May 28, 2021</span>
            </div> */}

            {/* Activities */}
            {game && <GameCard activity={game} />}
            {data.spotify && !game && <SpotifyCard spotify={data.spotify} />}

            {/* Connections */}
            <div>
              <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Connections</h2>
              <ConnectionsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
