import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mdi-admin-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
  providers: [LoginService]
})
export class AdminLoginPageComponent {
  constructor (
    private loginService: LoginService,
    private router: Router
  ) {

  }

  async ngOnInit () {
    const isAuthed = await this.loginService.isAuthed();
    if (isAuthed) {
      this.router.navigateByUrl('/admin/index');
    }
  }
}
