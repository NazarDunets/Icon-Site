import { Component } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { User } from 'app/shared/models/user.model';

@Component({
  selector: 'mdi-admin-user-bar',
  templateUrl: './userBar.component.html',
  styleUrls: ['./userBar.component.scss'],
  providers: [
    LoginService
  ]
})
export class AdminUserBarComponent {
  constructor (
    private loginService: LoginService
  ) {}

  public user: User = null;

  async ngOnInit () {
    this.user = await this.loginService.getAdmin();
  }

  async logout () {
    await this.loginService.logout();
  }
}