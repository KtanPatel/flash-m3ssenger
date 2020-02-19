import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  model: any = { step: 'login', username: '' };
  constructor(private router: Router, private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  enterClickHandler = (e) => {
    sessionStorage.setItem('username', e);
    this.model.step = 'options';
    this.model.username = e;
  }

  optionClickHandler = (e) => {
    sessionStorage.setItem('option', e);
    if (e === 'public') {
      this.router.navigate(['chat'], { skipLocationChange: true, });
    } else {
      this.toastrService.danger(
        `Authentication required`,
        `Alert`,
        {
          icon: 'alert-triangle-outline'
        });
    }

  }

  ngOnDestroy(): void {

  }

}
