import { Data } from 'use-lanyard';

export default function SpotifyActivity(data: Data) {
  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Listening to Spotify</h2>

      <div className="items-center flex">
        <div className="relative self-start">
          <img src={data.spotify!.album_art_url} alt={data.spotify!.album} width="60" height="60" className="block object-cover" />
        </div>

        <div className="flex-auto overflow-hidden ml-2.5">
          <a
            href={`https://open.spotify.com/track/${data.spotify!.track_id}`}
            className="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm hover:underline underline-offset-2 text-slate-300"
          >
            {data.spotify!.song}
          </a>
          <div className="block whitespace-nowrap text-ellipsis overflow-hidden text-slate-300">by {data.spotify!.artist.replaceAll('; ', ', ')}</div>
          <div className="block whitespace-nowrap text-ellipsis overflow-hidden text-slate-300">on {data.spotify!.album}</div>
        </div>
      </div>

      {/* <div className="mt-3">
        <div>
          <Progress time={time} />
          <div className="flex justify-between">
            {time && time.start && <span className="text-xs text-slate-300">{time!.start}</span>}
            {time && time.end && <span className="text-xs text-slate-300">{time!.end}</span>}
          </div>
        </div>
      </div> */}
    </div>
  );
}
