import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/admin/services/login.service';
import { IconService } from 'app/shared/icon.service';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';

@Component({
  selector: 'mdi-admin-bulk-edit-page',
  templateUrl: './bulkEditPage.component.html',
  styleUrls: ['./bulkEditPage.component.scss'],
  providers: [
    LoginService,
    IconService
  ]
})
export class AdminBulkEditPageComponent {
  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public filterString: String = '';
  public displayedIcons: any[];

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    await this.loginService.isAuthed();

    const adminUser = await this.loginService.getAdmin();
    if (!adminUser.core) {
      this.router.navigateByUrl('/admin');
      return;
    }

    this.packages = await this.iconService.getAdminPackages();
    this.selectedPackage = this.packages[0];
    this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
    this.filterIconList();
    console.log(this.displayedIcons);
  }

  filterIconList() {
    this.displayedIcons = this.icons.reduce((output, icon) => {
      // TODO: Filtering here

      // Get base icon info
      const baseIcon = this.icons.find((i) => i.baseIconId === icon.baseIconId);

      // Expand aliases
      const aliases = icon?.aliases?.map((alias) => alias.name).join(', ');

      output.push({
        ...icon,
        baseIcon: {
          data: baseIcon.data,
          name: baseIcon.name
        },
        friendlyAliases: aliases
      });
      return output;
    }, []);
  }
}
