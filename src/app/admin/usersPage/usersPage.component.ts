import { Component } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { IconService } from 'app/shared/icon.service';
import { UserService } from 'app/shared/user.service';
import { ModificationService } from 'app/shared/modification.service';
import { User } from 'app/shared/models/user.model';
import { Package } from 'app/shared/models/package.model';

@Component({
  selector: 'mdi-admin-users-page',
  templateUrl: './usersPage.component.html',
  styleUrls: ['./usersPage.component.scss'],
  providers: [
    LoginService,
    UserService,
    IconService,
    ModificationService
  ]
})
export class AdminUsersPageComponent {
  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public users: User[] = [];

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private userService: UserService,
  ) {
    
  }

  public selectedUser: User = null;

  async ngOnInit() {
    await this.loginService.isAuthed();
    this.packages = await this.iconService.getAdminPackages();
    this.selectedPackage = this.packages[0];
    this.users = await this.userService.getAdminUsers(this.selectedPackage.id);
    console.log(this.users);
  }

  async addUser() {
    this.selectedUser = new User();
  }

  async editUser(user) {
    this.selectedUser = new User().from(user);
  }

  async saveUser() {
    const action = !!this.selectedUser?.id ? 'updateAdminProfile' : 'addAdminUser';

    try {
      await this.userService[action](this.selectedUser);

      this.users = await this.userService.getAdminUsers(this.selectedPackage.id);
      this.clearSelectedUser();
    } catch (e) {
      alert(`Unable to ${action === 'updateAdminProfile' ? 'edit' : 'add'} user.`);
      console.log(e);
    }
  }

  clearSelectedUser() {
    this.selectedUser = null;
  }
}