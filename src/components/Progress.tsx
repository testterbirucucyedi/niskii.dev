import { useTime } from '../hooks/useTime';

export default function Progress({ time }: { time: ReturnType<typeof useTime> }) {
  if (!time || !time.completion) return null;

  return (
    <div className="w-full bg-gray-200 rounded-full h-[4px] dark:bg-gray-700">
      <div className="bg-zinc-800 dark:bg-white h-[4px] rounded-full" style={{ width: `${time.completion}%` }} />
    </div>
  );
}
