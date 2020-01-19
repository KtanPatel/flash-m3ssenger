import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  model: any = {};
  showSpinner: boolean;
  @Output() Click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  loginClickHandler = () => {
    this.Click.emit(this.model.username);
  }

}
