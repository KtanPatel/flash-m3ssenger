import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private socket: Socket) { }

  // Group Chat / Public

  pong() {
    return new Observable((observer) => {
      this.socket.on('pong', (data) => {
        observer.next(data);
      });
    });
  }

  joinGroup(params: formattedInput) {
    this.socket.emit('join', params, (err) => {
      if (err) {
        console.log('\n >>>>> Join Group: ', 'err ===>', err);
      }
    });
  }

  sendMessage(msg: message) {
    this.socket.emit('newMessage', msg);
  }

  getMessage() {
    return new Observable((observer) => {
      this.socket.on('newMessage', (msg: message) => {
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

  disconnectUser(room: string = 'public') {
    this.socket.emit('leave', { room });
  }

  disconnectServer = () => {
    this.socket.on('disconnect', () => {
      console.log('Connection lost from server.');
    });
  }

  getOnlineUsers() {
    return new Observable((observer) => {
      this.socket.on('updateUserList', (user: any) => {
        console.log('\n >>>>> OnlineUsers: ', 'user ===>', user);
        observer.next(user);
      });
    });
  }

}

interface formattedInput {
  username: string;
  room?: string;
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
