import type { GatewayActivity, GatewayActivityTimestamps } from 'discord-api-types/v10';

export interface LanyardUser {
  spotify: Spotify;
  listening_to_spotify: boolean;
  kv: object;
  discord_user: DiscordUser;
  discord_status: Status;
  activities: GatewayActivity[];
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export type Status = 'online' | 'idle' | 'dnd' | 'offline';

interface DiscordUser {
  username: string;
  public_flags: number;
  id: string;
  discriminator: string;
  avatar: string;
}
export interface Spotify {
  track_id: string;
  timestamps: GatewayActivityTimestamps;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export enum LanyardOpcode {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

export type LanyardIncomingPayload = LanyardEventInitStatePayload | LanyardEventPresenceUpdatePayload | LanyardHelloPayload;

interface LanyardEventInitStatePayload {
  op: LanyardOpcode.Event;
  seq: number;
  t: 'INIT_STATE';
  d: LanyardUser;
}

interface LanyardEventPresenceUpdatePayload {
  op: LanyardOpcode.Event;
  seq: number;
  t: 'INIT_STATE';
  d: LanyardUser;
}

interface LanyardHelloPayload {
  op: LanyardOpcode.Hello;
  d: { heartbeat_interval: number };
}

export interface WebSocketData extends Partial<LanyardUser> {
  heartbeat_interval?: number;
}
