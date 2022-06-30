import { Component, Prop, Part } from '@pictogrammers/element';

import template from "./pageHome.html";
import style from './pageHome.css';

import '@pictogrammers/components/pg/icon';
import MdiIcon from '@pictogrammers/components/pg/icon';
import { Icon } from '@pictogrammers/components/pg/shared/models/icon';
 
@Component({
  selector: 'site-page-home',
  style,
  template 
})
export default class SitePageHome extends HTMLElement {  
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];

  @Part() $animation: HTMLDivElement;
  @Part() $animation1: MdiIcon;
  @Part() $animation2: MdiIcon;
  @Part() $animation3: MdiIcon;
  @Part() $animation4: MdiIcon;
  @Part() $animation5: MdiIcon;
  @Part() $animation6: MdiIcon;
  @Part() $animation7: MdiIcon;
  @Part() $animation8: MdiIcon;
  @Part() $animation9: MdiIcon;
  @Part() $animation10: MdiIcon;

  get animations() {
    return [
      this.$animation1,
      this.$animation2,
      this.$animation3,
      this.$animation4,
      this.$animation5,
      this.$animation6,
      this.$animation7,
      this.$animation8,
      this.$animation9,
      this.$animation10
    ];
  }
  
  render(changes) {
    if (changes.icons && this.icons.length) {
      var count = this.icons.length;
      this.animations.forEach(animation => {
        var i = Math.floor(Math.random() * Math.floor(count - 1));
        animation.path = this.icons[i].data || '';
      });
      this.$animation.classList.add('animate');
    }
  }
}