import { EventEmitter } from 'events';
import { LanyardIncomingPayload, LanyardOpcode } from '../types/lanyard';

export class Lanyard extends EventEmitter {
  ws: WebSocket;
  heartbeat: NodeJS.Timer;
  user_id: string;

  constructor(userId: string) {
    super();

    this.user_id = userId;
    this.ws = new WebSocket('wss://api.lanyard.rest/socket');

    this.ws.addEventListener('open', () => {
      this.emit('connected');

      console.info('[WS] Successfully connected');
    });

    this.ws.addEventListener('message', event => {
      const data = JSON.parse(event.data) as LanyardIncomingPayload;

      switch (data.op) {
        case LanyardOpcode.Hello: {
          this.heartbeat = setInterval(() => this.ws.send(JSON.stringify({ op: LanyardOpcode.Heartbeat })), data.d.heartbeat_interval);
          this.ws.send(JSON.stringify({ op: LanyardOpcode.Initialize, d: { subscribe_to_id: this.user_id } }));
          break;
        }

        case LanyardOpcode.Event:
          this.emit('presence', data.d);
          break;

        default:
          console.info(`[WS] Unknown message: ${data}`);
      }
    });

    this.ws.addEventListener('close', event => {
      clearInterval(this.heartbeat);
      this.emit('disconnected', event.code, event.reason);

      console.error(`[WS] Closed with code ${event.code}.`);
    });
  }
}

export const lanyard = typeof window !== 'undefined' && new Lanyard('847865068657836033');
