import AnchorIcon from './icons/AnchorIcon';
import GitHubIcon from './icons/GitHubIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import VerifiedIcon from './icons/VerifiedIcon';

export default function Connections() {
  return (
    <>
      <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Connections</h2>
      <div className="flex flex-initial mt-3 flex-col flex-wrap items-stretch">
        {/* GitHub */}
        <div className="h-10 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white bg-zinc-700 rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <GitHubIcon />
            <span className="text-md font-semibold text-white">whoisniskii</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>

          <a href="/github">
            <AnchorIcon />
          </a>
        </div>

        {/* Spotify */}
        <div className="h-10 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white bg-zinc-700 rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <SpotifyIcon />
            <span className="text-md font-semibold text-white">whoisniskii</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="/spotify">
            <AnchorIcon />
          </a>
        </div>
      </div>
    </>
  );
}
