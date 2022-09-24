import { LanyardActivity } from '../../../types/lanyard';
import GameIcon from '../icons/GameIcon';

export default function GameActivity(activity: LanyardActivity) {
  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Playing a game</h2>

      {/* Image */}
      <div className="items-center flex">
        <div className="relative self-start">
          {activity.assets && activity.assets.large_image ? (
            <img
              src={
                activity.assets?.large_image.startsWith('mp:external')
                  ? activity.assets?.large_image.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/')
                  : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.webp`
              }
              width="60"
              height="60"
              className="block object-cover rounded-lg"
            />
          ) : (
            <GameIcon />
          )}
          {activity.assets && activity.assets?.small_image && activity.assets.large_image && (
            <img
              src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.small_image}.png`}
              width="20"
              height="20"
              className="rounded-full absolute -bottom-1 -right-1"
            />
          )}
        </div>

        {/* Details */}
        <div className="flex-auto overflow-hidden ml-2.5">
          <div className="font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm text-slate-300">{activity.name}</div>
          <div className="block whitespace-nowrap text-ellipsis overflow-hidden text-slate-300">{activity.details}</div>
          <div className="text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">{activity.state}</div>

          {/* Progress */}
          {/* {activity.timestamps && (
            <div className="block whitespace-nowrap text-ellipsis overflow-hidden text-slate-300">{time?.start && !time.end ? `${time.start} elapsed` : `${time?.end} left`}</div>
          )} */}
        </div>
      </div>

      {/* Buttons */}
      {activity.buttons && (
        <div className="flex mt-3 flex-col flex-wrap space-y-2 justify-center items-stretch">
          {activity.buttons?.map(button => (
            <button className="h-8 text-sm w-full relative flex items-center justify-center text-white bg-zinc-600 hover:bg-zinc-500 rounded transition-colors">
              <div className="block whitespace-nowrap text-ellipsis overflow-hidden">{button.toString()}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
