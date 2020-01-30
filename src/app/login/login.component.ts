import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  model: any = { step: 'login' };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  enterClickHandler = (e) => {
    sessionStorage.setItem('username', e);
    this.model.step = 'options';
  }

  optionClickHandler = (e) => {
    sessionStorage.setItem('option', e);
    this.router.navigate(['chat'], { skipLocationChange: true });
  }

  ngOnDestroy(): void {

  }

}
