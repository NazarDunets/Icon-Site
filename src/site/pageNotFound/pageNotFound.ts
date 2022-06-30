import { Component, Prop, Part } from '@pictogrammers/element';
 
import template from "./pageNotFound.html";
import style from './pageNotFound.css';

import { Icon } from '@pictogrammers/components/pg/shared/models/icon';

@Component({
  selector: 'site-page-not-found',
  style,
  template 
})
export default class SitePageNotFound extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  @Prop() name = '';
  
  @Part() $message: HTMLDivElement;
  
  render(changes) {
    if (changes.name) {
      this.$message.innerText = this.name;
    }
  }
}