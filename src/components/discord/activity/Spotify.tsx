import { Data } from 'use-lanyard';
import { useTime } from '../../../hooks/useTime';
import Progress from '../../Progress';

export default function SpotifyActivity(data: Data) {
  if (!data) return null;

  const time = useTime(data.spotify!.timestamps);

  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">Listening to Spotify</h2>

      <div className="items-center flex">
        <div className="relative self-start">
          <img src={data.spotify?.album_art_url} alt={data.spotify?.album} width="60" height="60" className="block object-cover rounded-lg" />
        </div>

        <div className="flex-auto overflow-hidden ml-2.5">
          <a
            href={`https://open.spotify.com/track/${data.spotify?.track_id}`}
            className="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm hover:underline underline-offset-2 text-zinc-800 dark:text-slate-300"
          >
            {data.spotify?.song}
          </a>
          <div v-if={data.spotify?.artist.replaceAll('; ', ', ')} className="block whitespace-nowrap text-ellipsis overflow-hidden text-zinc-800 dark:text-slate-300">
            by {data.spotify?.artist.replaceAll('; ', ', ')}
          </div>
          <div v-if={data.spotify?.album} className="block whitespace-nowrap text-ellipsis overflow-hidden text-zinc-800 dark:text-slate-300">
            on {data.spotify?.album}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div>
          <Progress time={time} />
          <div className="flex justify-between">
            {time && time.start && <span className="text-xs text-zinc-800 dark:text-slate-300">{time!.start}</span>}
            {time && time.end && <span className="text-xs text-zinc-800 dark:text-slate-300">{time!.end}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
