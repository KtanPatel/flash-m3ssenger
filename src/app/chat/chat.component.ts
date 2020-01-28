import { Component, OnInit } from '@angular/core';
// import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  menu: NbMenuItem[] = [];
  constructor(private sidebarService: NbSidebarService, private chatService: ChatService) {
    this.initialUsersList();
  }

  ngOnInit() {
    this.chatService.getOnlineUsers().subscribe((users: any) => {
      this.initialUsersList();
      users.map(u => {
        this.menu.push({
          title: u,
          icon: 'person-outline',
          link: '',
          group: true
        });
      });
    });
  }

  initialUsersList = () => {
    const menuItem: NbMenuItem[] = [
      {
        title: 'Bot (Admin)',
        icon: 'people-outline',
        link: '',
        group: true,
      }
    ];
    this.menu = menuItem;
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
