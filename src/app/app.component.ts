import { Component } from '@angular/core';
import { ChatService } from './shared/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flash-m3ssenger';
  heartBeat: boolean;
  constructor(private socketService: ChatService) {
    this.socketService.pong().subscribe(res => {
      this.heartBeat = true;
      setTimeout(() => {
        this.heartBeat = false;
      }, 1000);
    });
  }
}
