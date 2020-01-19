import { Component, OnInit } from '@angular/core';
// import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // menu: NbMenuItem[] = [];
  constructor(private sidebarService: NbSidebarService) {
    // const menuItem: NbMenuItem[] = [
    //   {
    //     title: 'General',
    //     icon: 'people-outline',
    //     link: '',
    //   }
    // ];
    // this.menu = menuItem;
  }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
