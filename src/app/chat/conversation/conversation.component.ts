import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  username: string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.chatService.onlineStatus().subscribe(user => {
      this.messages.push(
        {
          text: user,
          date: new Date(),
          reply: false,
          type: 'text',
          user: {
            name: 'bot',
          },
        }
      );
    });
    this.chatService.getMessage().subscribe((message: any) => {
      message.reply = false;
      if (message.user.name !== this.username) {
        this.messages.push(message);
      }
    });
  }

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    const message = {
      text: event.message,
      date: new Date(),
      reply,
      type: files.length ? 'file' : 'text',
      files,
      user: {
        name: userName,
        avatar,
      },
    };
    this.chatService.sendMessage(message);

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply,
      type: files.length ? 'file' : 'text',
      files,
      user: {
        name: userName,
        avatar,
      },
    });

  }

  ngOnDestroy() {
    this.chatService.disconnectUser(this.username);
  }

}
