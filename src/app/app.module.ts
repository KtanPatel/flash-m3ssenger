import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from './shared/components/components.module';
import { FormsModule } from '@angular/forms';
// import { MaterialModules } from './shared/materialModules';
import { NbThemeModule } from '@nebular/theme';
import { NbModule } from './shared/nb.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // MaterialModules,
    ComponentsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
