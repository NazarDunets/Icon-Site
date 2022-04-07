import { Component } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { User } from 'app/shared/models/user.model';

@Component({
  selector: 'mdi-admin-index-page',
  templateUrl: './indexPage.component.html',
  styleUrls: ['./indexPage.component.scss'],
  providers: [
    LoginService
  ]
})
export class AdminIndexPageComponent {
  constructor (
    private loginService: LoginService
  ) {}

  public user: User = new User();

  async ngOnInit () {
    await this.loginService.isAuthed();
    this.user = await this.loginService.getAdmin();
  }
}
