import { LanyardPresence } from '../../types/lanyard';
import About from './About';
import GameActivity from './activity/Game';
import SpotifyActivity from './activity/Spotify';
import Avatar from './Avatar';
import Connections from './Connections';

interface CardProps {
  data: LanyardPresence;
}

export default function Profile(props: CardProps) {
  const game = props.data.activities.find(x => x.type === 0);
  const { spotify } = props.data;

  return (
    <div className="w-[300px] text-slate-200 drop-shadow-xl font-['Whitney']">
      <div className="rounded-2xl overflow-hidden bg-zinc-900">
        <div className="relative">
          {/* Banner */}
          <div className="w-full h-[120px] bg-center bg-[url('https://cdn.discordapp.com/banners/847865068657836033/4689888919bd63aa766d17d7eb2503ff.png?size=300')]" />

          {/* Avatar */}
          <div className="absolute top-[76px] left-[16px]">
            <div className="rounded-full">{Avatar(props.data)}</div>
          </div>

          {/* Username and tag */}
          <div className="pt-14 pb-3 px-4">
            <div className="text-xl font-semibold leading-6">
              <span className="text-slate-50">Niskii</span>
              <span className="text-slate-300">#0001</span>
            </div>
          </div>

          <div className="px-4 pb-3.5 flex-initial text-sm">
            <div className="w-full h-[1px] bg-zinc-800 mb-3" />
            <About />
            {game && GameActivity(game)}
            {spotify && SpotifyActivity(spotify)}

            <Connections />
          </div>
        </div>
      </div>
    </div>
  );
}
