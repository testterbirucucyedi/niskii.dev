import { useTime } from '../../../hooks/useTime';
import { LanyardSpotify } from '../../../types/lanyard';
import Progress from '../../Progress';
import SpotifyIcon from '../icons/SpotifyIcon';
import SpotifyWhiteIcon from '../icons/SpotifyWhiteIcon';

export default function SpotifyActivity(spotify: LanyardSpotify) {
  const time = useTime(spotify.timestamps);

  return (
    <div className="mb-3">
      <div className="justify-between flex flex-row items-center">
        <div className="text-center">
          <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Listening to Spotify</h2>
        </div>
        <SpotifyIcon />
      </div>

      {/* Image */}
      <div className="items-center flex">
        <div className="relative self-start">
          <img src={spotify.album_art_url} alt={spotify.album} width="60" height="60" className="block object-cover rounded-lg" />
        </div>

        <div className="flex-auto overflow-hidden ml-2.5">
          <a
            href={`https://open.spotify.com/track/${spotify.track_id}`}
            className="block whitespace-nowrap text-ellipsis overflow-hidden text-sm font-semibold text-normal hover:underline underline-offset-2 text-slate-300"
          >
            {spotify.song}
          </a>
          <div className="block whitespace-nowrap text-ellipsis overflow-hidden text-normal text-slate-300">by {spotify.artist.replaceAll('; ', ', ')}</div>
          <div className="block whitespace-nowrap text-ellipsis overflow-hidden text-normal text-slate-300">on {spotify.album}</div>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-3">
        {spotify.timestamps && (
          <div>
            <Progress time={time} />
            <div className="flex flex-row items-center gap-3 justify-between">
              {time && time.start && <span className="text-xs text-normal">{time.start}</span>}
              {time && time.end && <span className="text-xs text-normal">{time.end}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="mt-1">
        <div className="flex mt-3 flex-col flex-wrap justify-center items-stretch">
          <a href={`https://open.spotify.com/track/${spotify.track_id}`}>
            <button className="h-8 text-sm w-full space-x-2 relative flex items-center justify-center text-white bg-zinc-600 hover:bg-zinc-500 rounded transition-colors">
              <SpotifyWhiteIcon />
              <div className="block whitespace-nowrap text-ellipsis overflow-hidden">Play on Spotify</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
