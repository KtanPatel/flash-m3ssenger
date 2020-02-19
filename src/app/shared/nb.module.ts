import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbChatModule, NbActionsModule, NbButtonModule,
  NbCardModule, NbInputModule, NbSidebarModule, NbMenuModule, NbToastrModule, NbToastrConfig,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const config: any = {
  position: 'bottom-end',
  preventDuplicates: true
};

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
    NbToastrModule.forRoot(config)
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
    NbMenuModule,
    NbToastrModule
  ]
})
export class NbModule { }
