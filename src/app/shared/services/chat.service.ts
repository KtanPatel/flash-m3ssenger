import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  // Group Chat / Public

  joinGroup(username: string) {
    this.socket.emit('join', username);
  }

  sendMessage(msg: message) {
    this.socket.emit('chat_message', msg);
  }

  getMessage() {
    return new Observable((observer) => {
      this.socket.on('chat_message', (msg: message) => {
        observer.next(msg);
      });
    });
  }

  onlineStatus() {
    return new Observable((observer) => {
      this.socket.on('is_online', (username: string) => {
        observer.next(username);
      });
    });
  }

  disconnectUser(username: string) {
    this.socket.emit('disconnect', username);
  }

}

interface message {
  text: string;
  date: Date;
  reply: boolean;
  type: string;
  files?: [{ url: string, type: string, icon: string }];
  quote?: string;
  latitude?: string;
  longitude?: string;
  user: {
    name: string,
    avatar?: string,
  };
}
