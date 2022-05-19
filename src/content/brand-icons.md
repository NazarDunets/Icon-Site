# Brand and Logo Icons

Brand or logo icons are icons that represent a company and/or product logo. Some examples may include the Facebook logo, the VLC logo, the Square logo, etc.

## Brand Icons in Material Design Icons

As Material Design Icons has continued to rapidly grow, we've decided to take a step back and reaffirm our mission:

> Material Design Icons is an icon library dedicated to providing high-quality icons that follow [Material design principles](https://material.io/design/iconography/system-icons.html#design-principles).

Keeping that mission in mind, brand and logo icons are simply not _Material_. Additionally, we have had issues dealing with logos that don't work well in a single color, don't fit in a distinguishable way within a 24x24dp artboard, or are just very obscure logos to begin with. It is very easy to say that we do not feel that we have served this niche of icons well.

**Moving forward, we are no longer accepting new brand or logo icons into the Material Design Icons library under any circumstance.**

## Frequently Asked Questions

### What will happen with current brand icons in MDI?

All brand icons currently available in the Material Design Icons library are deprecated and will be **removed** in our v8 release.

### Where should I get my brand and logo icons from?

Pictogrammers, the group that brings you the Material Design Icons library, is busy building [our own brand library](https://github.com/Pictogrammers/brand-icons).

Another option would be to check out [Simple Icons](https://simpleicons.org/). Simple Icons is a full icon library specifically designed for brand and logo icons. They offer their [icon package on npm](https://www.npmjs.com/package/simple-icons) and provide SVG and JavaScript interfaces to include the icons into your project. Additionally, they have a CDN available if you do not wish to host the icons yourself.

### What logos have been deprecated and will be removed?

Everything currently [tagged as a brand icon](https://materialdesignicons.com/tag/brand).

### I use Home Assistant, will I be affected by this change?

If you use any brand icons slated to be removed, then yes. However, there is a [SimpleIcons integration available through the Home Assistant Community Store](https://github.com/vigonotion/hass-simpleicons) which will allow you to use any brand icons in their library.

We expect to create a HACS implementation for the new Pictogrammers Brand Library in the future.

### I use some other project that relies on MDI for their icons, will I be affected?

It really depends on if you are using brand or logo icons. If you are, we recommend opening an issue with the project that is integrating MDI to alert them to the upcoming changes.

### I use MDI's helper libraries, such as `@mdi/react`. Is this compatible with Simple Icons?

Yes! Our react component takes raw SVG path data to render an icon. Simple Icons also returns the combined path data of their icons, so you can simply use `@mdi/react` like this:

```jsx
import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import google from 'simple-icons/icons/google';

function App() {
  return (
    <div>
      <Icon path={mdiAccount} />
      <Icon path={google.path} />
    </div>
  );
}
```
