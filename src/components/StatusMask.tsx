import { LanyardUser } from '../types/lanyard';

const statusClasses = {
  online: 'fill-green-600',
  idle: 'fill-amber-400',
  dnd: 'fill-red-500',
  offline: 'fill-slate-500',
};

interface Props {
  user: LanyardUser;
}

export function StatusMask(data: Props) {
  if (!data && !data.user) return <circle cx="68" cy="68" r="8" className={statusClasses[data.user.discord_status]} mask="url(#svg-mask-status-offline)" />;

  switch (data.user.discord_status) {
    case 'online':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.user.discord_status]} />;
    case 'idle':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.user.discord_status]} mask="url(#svg-mask-status-idle)" />;
    case 'dnd':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.user.discord_status]} mask="url(#svg-mask-status-dnd)" />;
    case 'offline':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.user.discord_status]} mask="url(#svg-mask-status-offline)" />;
  }
}
