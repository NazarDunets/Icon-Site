import { Component, ViewChild } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { UserService } from 'app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Style } from 'app/shared/models/style.model';
import { SelectIconModal } from 'app/shared/selectIconModal/selectIconModal.component';
import { User } from 'app/shared/models/user.model';
import { FontVersion } from 'app/shared/models/fontVersion.model';
import { Font } from 'app/shared/models/font.model';
import { AssignUserModal } from 'app/shared/assignUserModal/assignUserModal.component';
import { Alias } from 'app/shared/models/alias.model';
import { Tag } from 'app/shared/models/tag.model';
import { ConfirmModal } from 'app/shared/confirmModal/confirmModal.component';
import { AliasService } from 'app/shared/alias.service';
import { TagService } from 'app/shared/tag.service';
import { AssignTagModal } from 'app/shared/assignTagModal/assignTagModal.component';
import { AssignAliasModal } from 'app/shared/assignAliasModal/assignAliasModal.component';

@Component({
  selector: 'mdi-admin-icons-page',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    LoginService,
    IconService,
    UserService,
    AliasService,
    TagService
  ]
})
export class AdminIconsPageComponent {

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private userService: UserService,
    private aliasService: AliasService,
    private tagService: TagService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const pack = this.route.snapshot.data['package'];
    if (pack) {
      this.selectedPackage = this.packages.find(p => p.id === pack.id);
    } else {
      this.selectedPackage = this.packages[0];
    }
  }
  @ViewChild('newIconName') newIconName;
  public packages: Package[] = [];
  public users: User[] = [];
  public selectedUser: User = null;
  public selectedPackage: Package = null;
  public fonts: Font[] = [];
  public selectedFont: Font = null;
  public versions: FontVersion[] = [];
  public selectedFontVersion: FontVersion = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public icon: Icon = null;
  public newIcon: Icon = null;
  public editIcon: Icon = null;
  public styles: Style[] = null;
  public loading: boolean = true;
  public baseIcon: Icon = null;
  public issue: string = null;
  private noIcon = 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z';

  async ngOnInit() {
    await this.loginService.isAuthed();
    this.packages = await this.iconService.getAdminPackages();
    this.selectedPackage = this.packages[0];
    this.users = await this.userService.getAdminUsers(this.selectedPackage.id);
    const currentUser = await this.loginService.getAdmin();
    this.selectedUser = this.users.find(u => u.id === currentUser.id);
    this.styles = await this.iconService.getStyles(this.selectedPackage.id);
  }

  goBack() {
    this.router.navigateByUrl('/admin/index');
  }

  async logout() {
    await this.loginService.logout();
  }

  async selectPackage() {
    // User Select
    this.users = await this.userService.getAdminUsers(this.selectedPackage.id);
    this.selectedUser = this.users[0];
    // Icons Search component is smart now
    // this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
    // this.selectedIcon = this.icons[0];
    this.styles = await this.iconService.getStyles(this.selectedPackage.id);
  }

  selectFont() {

  }

  selectFontVersion() {
    
  }

  async selectUser() {

  }

  async selectIcon(iconId) {
    this.loading = true;
    const selectedIcon = iconId || this.selectedIcon.id;
    this.icon = await this.iconService.getAdminIcon(selectedIcon);
    this.editIcon = new Icon().from(this.icon);

    if (this.icon.baseIconId) {
      this.baseIcon = await this.iconService.getAdminIcon(this.icon.baseIconId);
    } else {
      this.baseIcon = null;
    }

    this.loading = false;
    this.newIcon = null;
    this.loadFonts();
  }

  async addIcon() {
    this.editIcon = null;
    this.selectedIcon = null;
    this.newIcon = new Icon("", this.noIcon);
    this.newIcon.packageId = this.selectedPackage.id;
    this.newIcon.published = true;
    this.loadFonts();
  }

  async loadFonts() {
    this.fonts = await this.iconService.getAdminFonts(this.selectedPackage.id);
    this.selectedFont = this.fonts[0];
    this.versions = this.selectedFont.versions;
    this.selectedFontVersion = this.versions[0];
  }

  async submitIcon() {
    try {
      const icon = await this.iconService.getIconByName(this.newIcon.packageId, this.newIcon.name);
      console.log(icon);
      alert('Icon name already exists!');
    } catch (e) {
      try {
        const newIcon = await this.iconService.addIcon(this.newIcon, this.selectedUser, {
          issue: this.issue,
          fontVersion: this.selectedFontVersion
        });

        // TODO: Currently need a second for the back-end to catch up.
        // We should probably find a better way of doing this in the future.
        setTimeout(() => {
          this.selectIcon(newIcon.id);
        }, 1000);       
      } catch (ee) {
        alert('Failed to add icon... not sure why.');
      }
    }
  }

  isIssueInvalid(){
    if (this.issue === null || this.issue === '') {
      return false;
    }
    if(this.issue.match(/#/)) {
      return true;
    }
    return false;
  }

  cancelIcon() {
    this.newIcon = null;
    this.issue = null;
  }

  autofillDescription() {
    const currentName = this.newIcon?.name?.trim();
    const currentDesc = this.newIcon?.description?.trim();
    if (currentDesc || !currentName) {
      return;
    }

    const readableName = currentName
      .split('-')
      .map((frag) => `${frag.charAt(0).toUpperCase()}${frag.slice(1)}`)
      .join(' ');

    this.newIcon.description = `${readableName}.`;
  }

  async updateDescription() {
    this.icon = await this.iconService.updateDescription(this.editIcon, this.selectedUser);
    this.editIcon = new Icon().from(this.icon);
  }

  async updateData() {
    this.icon = await this.iconService.updateData(this.editIcon, this.selectedUser);
    this.editIcon = new Icon().from(this.icon);
  }

  setBaseIcon() {
    const modal = this.modalService.open(SelectIconModal);
    modal.componentInstance.packageId = this.selectedPackage.id;
    modal.componentInstance.baseIconId = this.editIcon.baseIconId;
    modal.result.then(async (result) => {
      const icon = await this.iconService.setBaseIconId(this.editIcon, result);
      this.editIcon.baseIconId = icon.baseIconId;
      this.baseIcon = await this.iconService.getAdminIcon(this.editIcon.baseIconId);
    }, (reason) => {
      // dismissed
    });
  }

  inStyle(id) {
    return this.editIcon.styles.find(s => s.id == id) != null;
  }

  async toggleStyle(style: Style) {
    this.loading = true;
    const icon = await this.iconService.toggleStyle(this.editIcon, style);
    this.editIcon.styles = icon.styles;
    this.loading = false;
  }

  optimizeEdit() {
    this.iconService.optimizeData(this.editIcon).then((icon) => {
      this.editIcon.data = icon.data;
      this.editIcon.fixSVGO();
      this.editIcon.cleanRounding();
      this.editIcon.expand();
    });
  }

  optimize() {
    this.iconService.optimizeData(this.newIcon).then((icon) => {
      this.newIcon.data = icon.data;
      this.newIcon.fixSVGO();
      this.newIcon.cleanRounding();
      this.newIcon.expand();
    });
  }

  validEditPath() {
    if (this.editIcon.data.match(/[a-y]/)) {
      return false;
    }
    return true;
  }

  validPath() {
    if (this.newIcon.data.match(/[a-y]/)) {
      return false;
    }
    return true;
  }

  pathChange(e) {
    console.log(this.newIcon.data);
  }

  pathError(e) {
    console.log(e, 'error');
  }

  async rename(){
    this.selectedIcon = await this.iconService.rename(this.editIcon, this.selectedUser, {
      fontVersion: this.selectedFontVersion
    });
  }

  async assignUser() {
    const modal = this.modalService.open(AssignUserModal);
    modal.componentInstance.user = this.editIcon.user;
    modal.componentInstance.package = this.selectedPackage;
    modal.result.then(async (user) => {
      const icon = new Icon();
      icon.id = this.selectedIcon.id;
      icon.user = user;
      var updatedIcon = await this.iconService.updateUser(icon, this.selectedUser, {
        fontVersion: this.selectedFontVersion
      });
      this.editIcon.user = updatedIcon.user;
    }, (reason) => {
      // dismissed
    });
  }

  async removeAlias(alias: Alias) {
    const modal = this.modalService.open(ConfirmModal);
    modal.componentInstance.title = "Delete Alias";
    modal.componentInstance.description = "Are you sure you delete this alias?";
    modal.result.then(async () => {
      this.editIcon = await this.aliasService.deleteAlias(this.selectedIcon, alias);
    });
  }

  async removeTag(tag: Tag) {
    const modal = this.modalService.open(ConfirmModal);
    modal.componentInstance.title = "Delete Tag";
    modal.componentInstance.description = "Are you sure you delete this tag?";
    modal.result.then(async () => {
      this.editIcon = await this.tagService.deleteTag(this.selectedIcon, tag);
    });
  }

  addTag() {
    const modal = this.modalService.open(AssignTagModal);
    modal.componentInstance.package = this.selectedPackage;
    modal.result.then(async (tag: Tag) => {
      this.editIcon = await this.tagService.assignTag(this.selectedIcon, tag);
    }, (reason) => {
      // dismissed modal
    });
  }

  addAlias() {
    const modal = this.modalService.open(AssignAliasModal);
    modal.componentInstance.package = this.selectedPackage;
    modal.result.then(async (name: string) => {
      const alias = new Alias();
      alias.name = name;
      this.editIcon = await this.aliasService.assignAlias(
        this.selectedIcon,
        alias,
        this.selectedFontVersion
      );
    }, (reason) => {
      // dismissed modal
    });
  }

  async deprecated() {
    this.editIcon = await this.iconService.updateDeprecated(this.editIcon);
  }

  async published() {
    this.editIcon = await this.iconService.updatePublished(this.editIcon);
  }
}