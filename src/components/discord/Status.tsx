import { Data } from 'use-lanyard';

export function DiscordStatus(data: Data | undefined) {
  if (!data) return 'fill-gray-600';

  switch (data.discord_status) {
    case 'online':
      return 'fill-green-600';
    case 'idle':
      return 'fill-amber-400';
    case 'dnd':
      return 'fill-red-700';
    case 'offline':
      return 'fill-slate-500';
  }

  return 'fill-slate-500';
}
