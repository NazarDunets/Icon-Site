import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input()
  showBack: boolean;

  constructor (
    private loginService: LoginService,
    private router: Router
  ) {}

  public user: User = null;

  async ngOnInit () {
    this.user = await this.loginService.getAdmin();
  }

  async logout () {
    await this.loginService.logout();
  }

  goBack() {
    this.router.navigateByUrl('/admin/index');
  }
}