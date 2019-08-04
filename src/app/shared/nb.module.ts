import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbChatModule, NbActionsModule, NbButtonModule,
  NbCardModule, NbInputModule, NbSidebarModule, NbMenuModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
  ],
  exports: [
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class NbModule { }
