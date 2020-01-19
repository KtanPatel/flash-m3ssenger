import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
// import { MaterialModules } from '../materialModules';
import { LoginOptionComponent } from './login-option/login-option.component';
import { FormsModule } from '@angular/forms';
import { NbModule } from '../nb.module';


@NgModule({
  declarations: [LoginScreenComponent, LoginOptionComponent],
  imports: [
    CommonModule,
    // MaterialModules,
    FormsModule, NbModule
  ],
  exports: [LoginScreenComponent, LoginOptionComponent, NbModule]
})
export class ComponentsModule { }
