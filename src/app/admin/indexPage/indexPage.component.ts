import { Component } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';

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

  async ngOnInit () {
    await this.loginService.isAuthed();
  }
}