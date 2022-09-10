import { Data } from 'use-lanyard';

export default function GameActivity(data: Data | undefined) {
  if (!data) return null;

  const activity = data.activities.find(x => x.type === 0);
  if (!activity) return null;

  // const time = useTime(activity!.timestamps);

  const getAssetUrl = (appId: string, asset: string) =>
    asset.startsWith('mp:external') ? `https://media.discordapp.net/${asset.replace('mp:', '')}` : `https://cdn.discordapp.com/${appId}/${asset}.png`;

  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">Playing a game</h2>

      <div className="items-center flex">
        <div className="relative self-start">
          <img
            src={activity!.assets?.large_image ? getAssetUrl(activity.application_id!, activity.assets.large_image) : `https://dcdn.dstn.to/app-icons/${activity.application_id}`}
            alt={activity!.assets?.large_text}
            width="60"
            height="60"
            className="block object-cover rounded-lg"
          />
          <img
            src={getAssetUrl(activity.application_id!, activity.assets?.small_image as string)}
            alt={activity!.assets?.small_text}
            width="20"
            height="20"
            className="rounded-full absolute -bottom-1 -right-1"
          />
        </div>

        <div className="flex-auto overflow-hidden ml-2.5">
          <div className="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm text-zinc-800 dark:text-slate-300">{activity!.name}</div>
          <div v-if={activity!.details} className="block whitespace-nowrap text-ellipsis overflow-hidden text-zinc-800 dark:text-slate-300">
            {activity!.details}
          </div>
          <div v-if={activity!.state} className="text-zinc-800 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
            {activity!.state}
          </div>
          {/* <div v-if="elapsed" className="block whitespace-nowrap text-ellipsis overflow-hidden text-zinc-800 dark:text-slate-300">
            {time?.start && !time.end ? `${time.start} elapsed` : `${time?.end} left`}
          </div> */}
        </div>
      </div>
    </div>
  );
}
