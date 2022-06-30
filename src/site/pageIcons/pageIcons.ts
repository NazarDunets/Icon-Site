import { Component, Prop, Part } from '@pictogrammers/element';
 
import template from "./pageIcons.html";
import style from './pageIcons.css';

import '@pictogrammers/components/pg/buttonLink';
import '@pictogrammers/components/pg/scroll';
import '@pictogrammers/components/pg/grid';
import MdiGrid from '@pictogrammers/components/pg/grid';
import '@pictogrammers/components/pg/inputTextIcon';
import MdiInputTextIcon from '@pictogrammers/components/pg/inputTextIcon';
import '@pictogrammers/components/pg/inputSelect';
import MdiInputSelect from '@pictogrammers/components/pg/inputSelect';
import '@pictogrammers/components/pg/inputUserSelect';
import MdiInputUserSelect from '@pictogrammers/components/pg/inputUserSelect';
import { Icon } from '@pictogrammers/components/pg/shared/models/icon';
import { http } from '@pictogrammers/components/pg/shared/http';
import { Tag } from '@pictogrammers/components/pg/shared/models/tag';
import { User } from '@pictogrammers/components/pg/shared/models/user';
import '@pictogrammers/components/pg/avatar';
import MdiAvatar from '@pictogrammers/components/pg/avatar';
import { addTooltip } from '@pictogrammers/components/pg/tooltip';

@Component({
  selector: 'site-page-icons',
  style,
  template 
})
export default class SitePageIcons extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $grid: MdiGrid;
  @Part() $search: MdiInputTextIcon;
  @Part() $select: MdiInputSelect;
  @Part() $contributors: MdiInputUserSelect;

  async connectedCallback() {
    const packageId = '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B';
    const tags = (await http.get<Tag[]>(`/api/package/${packageId}/tag`)).map(tag => new Tag().from(tag));
    this.$select.options = [
      {
        label: 'All Tags',
        value: 'all'
      },
      ...tags.map(tag => ({
        label: tag.name,
        value: tag.id
      }))
    ];
    this.$select.value = 'all';
    const users = (await http.get<User[]>(`/api/package/${packageId}/user`)).map(user => new User().from(user));
    this.$contributors.options = users;
  }
  
  render(changes) {
    if (changes.icons && this.icons) {
      this.$grid.icons = this.icons;
    }
  }
}