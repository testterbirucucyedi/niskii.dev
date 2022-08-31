import GitHubIcon from './icons/GitHubIcon';
import LinkIcon from './icons/LinkIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import TwitterIcon from './icons/TwitterIcon';

export default function Connections() {
  return (
    <>
      <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">Connections</h2>
      <div className="flex flex-initial mt-3 flex-col flex-wrap items-stretch">
        <div className="h-10 mb-2 text-sm w-auto relative flex items-center px-4 justify-between text-white bg-zinc-500 dark:bg-zinc-700 rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <GitHubIcon />
            <span className="text-md font-semibold text-zinc-900 dark:text-white">whoisniskii</span>
          </div>
          <a href="/github">
            <LinkIcon />
          </a>
        </div>

        <div className="h-10 mb-2 text-sm w-auto relative flex items-center px-4 justify-between text-white bg-zinc-500 dark:bg-zinc-700 rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <SpotifyIcon />
            <span className="text-md font-semibold text-zinc-900 dark:text-white">yo, niskii</span>
          </div>
          <a href="/spotify">
            <LinkIcon />
          </a>
        </div>

        <div className="h-10 text-sm w-auto relative flex items-center px-4 justify-between text-white bg-zinc-500 dark:bg-zinc-700 rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <TwitterIcon />
            <span className="text-md font-semibold text-zinc-900 dark:text-white">whoisniskii</span>
          </div>
          <a href="/twitter">
            <LinkIcon />
          </a>
        </div>
      </div>
    </>
  );
}
