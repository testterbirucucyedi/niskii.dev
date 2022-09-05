export default function About() {
  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">About Me</h2>
      <div className="whitespace-pre-line">
        <span className="inline-block">
          <img src="/flag-br.svg" alt="flag-br" className="w-5 h-5 inline-block align-bottom" draggable="false" />
          <a className="text-zinc-800 dark:text-slate-300">{' He/Him · '}</a>
          <a href="https://www.16personalities.com/istp-personality" className="hover:underline underline-offset-2 text-zinc-800 dark:text-slate-300">
            {' ISTP'}
          </a>
          {'-T · '}
          <a className="text-zinc-800 dark:text-slate-300">{' Developer \n\n'}</a>
        </span>

        <span className="inline-block">
          <img src="/small-blue-diamond.svg" alt="small-blue-diamond" className="w-5 h-5 inline-block align-bottom" draggable="false" />{' '}
          <a href="https://github.com/denkylabs/helly" className="text-zinc-800 dark:text-slate-300 hover:underline underline-offset-2">
            {'Helly'}
          </a>
          {"'s"}
          <a className="text-zinc-800 dark:text-slate-300">{' Core Maintainer '}</a>
        </span>

        <span className="inline-block">
          <img src="/small-blue-diamond.svg" alt="small-blue-diamond" className="w-5 h-5 inline-block align-bottom" draggable="false" />{' '}
          <a href="https://github.com/denkylabs/denkybot" className="text-zinc-800 dark:text-slate-300 hover:underline underline-offset-2">
            {'Denky Bot'}
          </a>
          <a className="text-zinc-800 dark:text-slate-300">{' Lead Programmer '}</a>
        </span>
      </div>
    </div>
  );
}
