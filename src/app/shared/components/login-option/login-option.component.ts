import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-option',
  templateUrl: './login-option.component.html',
  styleUrls: ['./login-option.component.scss']
})
export class LoginOptionComponent implements OnInit {

  @Output() Click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickHandler(val: string) {
    this.Click.emit(val);
  }

}
