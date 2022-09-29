import { LanyardUser } from '../types/lanyard';
import { AboutCard } from './AboutCard';
import { GameCard } from './activity/GameCard';
import { SpotifyCard } from './activity/SpotifyCard';
import { Avatar } from './Avatar';
import { ConnectionsCard } from './ConnectionsCard';

interface CardProps {
  data: LanyardUser;
}

export function ProfileCard(props: CardProps) {
  const game = props.data.activities.find(x => x.type === 0);

  return (
    <div className="w-[300px] text-slate-200 drop-shadow-xl font-['Whitney']">
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
            <div className="rounded-full">{Avatar(props.data)}</div>
          </div>

          {/* Username and tag */}
          <div className="pt-14 pb-3 px-4">
            <div className="text-xl font-semibold leading-6">
              <span className="text-slate-50">{props.data.discord_user.username}</span>
              <span className="text-slate-300">#{props.data.discord_user.discriminator}</span>
            </div>
          </div>

          <div className="px-4 pb-3.5 flex-initial text-sm">
            <div className="w-full h-[1px] bg-zinc-800 mb-3" />
            <AboutCard />
            {game && GameCard(game)}
            {props.data.spotify && !game && SpotifyCard(props.data.spotify)}

            <ConnectionsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
