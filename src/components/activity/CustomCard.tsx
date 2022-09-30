import type { GatewayActivity } from 'discord-api-types/v10';

interface CardProps {
  activity: GatewayActivity;
}

export function CustomCard({ activity }: CardProps) {
  return (
    <div className="flex flex-row">
      {activity.emoji && (
        <img src={`https://cdn.discordapp.com/emojis/${activity.emoji.id}.webp?size=44&quality=lossless`} aria-label={activity.emoji.name} className="w-5 h-5 -my-px mr-1 flot-left" />
      )}
      {activity.state && <span className="font-sans antialiased text-sm">{activity.state}</span>}
    </div>
  );
}
