import { Data } from 'use-lanyard';

export function Elapsed(num: number) {
  if (!num) return null;

  const distance = Date.now() - num;

  const minutes = (Math.floor(distance / 60000) % 60).toString().padStart(2, '0');
  const seconds = (Math.floor(distance / 1000) % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
}

export default function SpotifyActivity(data: Data) {
  if (!data) return null;

  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">Listening to Spotify</h2>

      <div className="items-center flex">
        <div className="relative self-start">
          <img src={data.spotify?.album_art_url} alt={data.spotify?.album} width="60" height="60" className="block object-cover rounded-lg" />
        </div>

        <div className="flex-auto overflow-hidden ml-2.5">
          <div className="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm">{data.spotify?.song}</div>
          <div v-if={data.spotify?.artist.replaceAll('; ', ', ')} className="block whitespace-nowrap text-ellipsis overflow-hidden">
            by {data.spotify?.artist.replaceAll('; ', ', ')}
          </div>
          <div v-if={data.spotify?.album} className="block whitespace-nowrap text-ellipsis overflow-hidden">
            on {data.spotify?.album}
          </div>
          <div v-if="elapsed" className="block whitespace-nowrap text-ellipsis overflow-hidden">
            {Elapsed(data.spotify?.timestamps.start as number)} elapsed
          </div>
        </div>
      </div>
    </div>
  );
}
