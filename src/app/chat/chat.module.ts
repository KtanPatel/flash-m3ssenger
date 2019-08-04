import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NbModule } from '../shared/nb.module';


@NgModule({
  declarations: [ChatComponent, ConversationComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NbModule,
  ]
})
export class ChatModule { }
