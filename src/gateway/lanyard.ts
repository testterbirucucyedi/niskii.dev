import { Dispatch, SetStateAction } from 'react';
import { LanyardIncomingPayload, LanyardOpcode, LanyardUser } from '../types/lanyard';

type SetMyUser = Dispatch<SetStateAction<LanyardUser | undefined>>;

export class Lanyard {
  ws: WebSocket;
  heartbeat: NodeJS.Timer;
  user_id: string;

  constructor(userId: string) {
    this.user_id = userId;
  }

  connect(setUser: SetMyUser) {
    this.ws = new WebSocket('wss://api.lanyard.rest/socket');

    this.ws.onopen = () => {
      console.info('[WS] Successfully connected');
    };

    this.ws.onmessage = ({ data }) => {
      if (this.ws.readyState !== this.ws.OPEN) return;
      const { d, op } = JSON.parse(data) as LanyardIncomingPayload;

      switch (op) {
        case LanyardOpcode.Hello: {
          this.heartbeat = setInterval(() => this.ws.send(JSON.stringify({ op: LanyardOpcode.Heartbeat })), d.heartbeat_interval);
          this.ws.send(JSON.stringify({ op: LanyardOpcode.Initialize, d: { subscribe_to_id: this.user_id } }));
          break;
        }

        case LanyardOpcode.Event:
          setUser(d);
          break;

        default:
          console.info(`[WS] Unknown message: ${data}`);
      }
    };

    this.ws.onclose = ({ code }) => {
      clearInterval(this.heartbeat);
      console.info(`[WS] Connection closed with code ${code}. Retrying in 1 second.`);

      setTimeout(() => {
        this.connect(setUser);
      }, 1000);
    };
  }
}

export const lanyard = typeof window !== 'undefined' && new Lanyard('748799374628356126');
