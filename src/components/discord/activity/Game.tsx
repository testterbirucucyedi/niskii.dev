import { LanyardUser } from '../../../types/lanyard';

export function Elapsed(num: number) {
  if (!num) return null;

  const distance = Date.now() - num;
  const hours = Math.floor(distance / 3600000)
    .toString()
    .padStart(2, '0');
  const minutes = (Math.floor(distance / 60000) % 60).toString().padStart(2, '0');
  const seconds = (Math.floor(distance / 1000) % 60).toString().padStart(2, '0');
  if (hours === '00') {
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

export default function GameActivity(data: LanyardUser) {
  if (!data) return null;

  const activity = data.activities.find(x => x.type === 0);
  if (!activity) return null;

  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">Playing a game</h2>

      <div className="items-center flex">
        <div className="relative self-start">
          <img
            src={`https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}.png`}
            alt={activity?.assets?.large_text}
            width="60"
            height="60"
            className="block object-cover rounded-lg"
          />
          <img
            v-if={activity?.assets?.small_text}
            src={`https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.small_image}.png`}
            alt={activity?.assets?.small_text}
            width="20"
            height="20"
            className="rounded-full absolute -bottom-1 -right-1"
          />
        </div>

        <div className="flex-auto overflow-hidden ml-2.5">
          <div className="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm">{activity?.name}</div>
          <div v-if={activity?.details} className="block whitespace-nowrap text-ellipsis overflow-hidden">
            {activity?.details}
          </div>
          <div v-if={activity?.state} className="block whitespace-nowrap text-ellipsis overflow-hidden">
            {activity?.state}
          </div>
          <div v-if="elapsed" className="block whitespace-nowrap text-ellipsis overflow-hidden">
            {Elapsed(activity.timestamps?.start as number)} elapsed
          </div>
        </div>
      </div>
    </div>
  );
}
