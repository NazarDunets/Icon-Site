import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'mdi-admin-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
  providers: [LoginService]
})
export class AdminLoginPageComponent {
  public loginPath: string;

  constructor (
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginPath = environment.devapi && 'http://localhost:9080/';
  }

  async ngOnInit () {
    const isAuthed = await this.loginService.isAuthed();
    if (isAuthed) {
      this.router.navigateByUrl('/admin/index');
    }
  }
}
