// By https://github.com/dustinrouillard/personal-site/blob/master/src/utils/lanyard.ts, thx
import { EventEmitter } from 'events';
import { LanyardPresence } from '../types/lanyard';

enum LanyardWebSocketOpcode {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum LanyardWebSocketEvent {
  InitState = 'INIT_STATE',
  PresenceUpdate = 'PRESENCE_UPDATE',
}

interface WebSocketData extends Partial<LanyardPresence> {
  heartbeat_interval?: number;
}

interface SocketMessage {
  op: LanyardWebSocketOpcode;
  t?: LanyardWebSocketEvent;
  d?: WebSocketData;
}

export interface Lanyard {
  ws: WebSocket;
  heartbeat: NodeJS.Timer;
  user_id: string;

  on(event: 'presence', listener: (presence: LanyardPresence) => void): this;
}

export class Lanyard extends EventEmitter {
  constructor(id: string) {
    super();

    this.user_id = id;
    this.ws = new WebSocket('wss://api.lanyard.rest/socket');

    this.ws.addEventListener('open', () => {
      this.emit('connected');

      console.info('[WS] Successfully connected');
    });

    this.ws.addEventListener('message', e => {
      this.message(JSON.parse(e.data));
    });

    this.ws.addEventListener('close', () => clearInterval(this.heartbeat));
  }

  private send(op: LanyardWebSocketOpcode, d?: any) {
    if (this.ws.readyState !== this.ws.OPEN) return;
    this.ws.send(JSON.stringify({ op, d }));
  }

  private subscribe(id: string) {
    return this.send(LanyardWebSocketOpcode.Initialize, { subscribe_to_id: id });
  }

  private sendHeartbeat() {
    return this.send(LanyardWebSocketOpcode.Heartbeat);
  }

  private message(data: SocketMessage) {
    switch (data.op) {
      case LanyardWebSocketOpcode.Hello:
        this.heartbeat = setInterval(() => this.sendHeartbeat(), data.d!.heartbeat_interval);
        this.subscribe(this.user_id);
        break;

      case LanyardWebSocketOpcode.Event:
        switch (data.t) {
          case LanyardWebSocketEvent.InitState:
          case LanyardWebSocketEvent.PresenceUpdate:
            this.emit('presence', data.d);
            break;
        }

        break;
      default:
        console.info('[WS] Unknown message', data);
    }
  }
}

export const lanyard = typeof window !== 'undefined' && new Lanyard('847865068657836033');
