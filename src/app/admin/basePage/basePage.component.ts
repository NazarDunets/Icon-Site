import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Package } from 'app/shared/models/package.model';
import { ActivatedRoute } from '@angular/router';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';
import { SelectIconModal } from 'app/shared/selectIconModal/selectIconModal.component';

@Component({
  selector: 'mdi-admin-base-page',
  templateUrl: './basePage.component.html',
  styleUrls: ['./basePage.component.scss'],
  providers: [
    IconService
  ]
})
export class AdminBasePageComponent {
  constructor(
    private iconService: IconService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.packages.push(new Package("38EF63D0-4744-11E4-B3CF-842B2B6CFE1B", "Material Design Icons"));
    this.packages.push(new Package("531A9B44-1962-11E5-89CC-842B2B6CFE1B", "Material Design Icons Light"));
    const pack = this.route.snapshot.data['package'];
    if (pack) {
      this.selectedPackage = this.packages.find(p => p.id === pack.id);
    } else {
      this.selectedPackage = this.packages[0];
    }
  }

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public baseIcons: any[] = [];

  async selectPackage() {
    this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
    for (let i of this.icons) {
      const baseIcon = this.baseIcons.find(x => x.id === i.baseIconId);
      if (baseIcon) {
        baseIcon.icons.push(i);
        if (i.id === i.baseIconId) {
          baseIcon.icon = i;
        }
      } else {
        this.baseIcons.push({
          id: i.baseIconId,
          icon: i.id == i.baseIconId ? i : null,
          icons: [i]
        });
      }
    }
    console.log(this.baseIcons);
  }

  async ngOnInit() {
    await this.selectPackage();
  }

  setBaseIcon(sourceIcon) {
    const hasBaseIconSet = !!sourceIcon.baseIconId;
    const modal = this.modalService.open(SelectIconModal);
    modal.componentInstance.packageId = this.selectedPackage.id;
    modal.componentInstance.baseIconId = sourceIcon.baseIconId;
    modal.result.then(async (result) => {
      const updatedIcon = await this.iconService.setBaseIconId(sourceIcon, result);

      if (hasBaseIconSet) {
        const newBaseIcon = this.baseIcons.find((icon) => icon.id === updatedIcon.baseIconId);
        newBaseIcon.icons.push(updatedIcon);
  
        const oldBaseIcon = this.baseIcons.findIndex((icon) => icon.id === sourceIcon.baseIconId);
        if (this.baseIcons[oldBaseIcon].icons.length === 1) {
          this.baseIcons.splice(oldBaseIcon, 1);
        } else {
          this.baseIcons[oldBaseIcon].icons = this.baseIcons[oldBaseIcon].icons.filter((icon) => icon.id !== sourceIcon.id);
        }
      }
    }, (reason) => {
      // dismissed
    });
  }
}