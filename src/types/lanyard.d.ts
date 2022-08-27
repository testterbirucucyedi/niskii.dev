import type { GatewayActivity } from 'discord-api-types/v10';
import type { Spotify } from 'use-lanyard';

export interface LanyardUser {
  spotify: Spotify;
  listening_to_spotify: boolean;
  kv: object;
  discord_user: DiscordUser;
  discord_status: Status;
  activities: GatewayActivity[];
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface DiscordUser {
  username: string;
  public_flags: number;
  id: string;
  discriminator: string;
  bot: boolean;
  avatar: string;
}

export type Status = 'online' | 'idle' | 'dnd' | 'offline';
