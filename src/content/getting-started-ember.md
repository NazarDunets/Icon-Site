# Ember - Getting Started

Just as there are multiple ways to consume `mdi` (SVG, WebFont, JS, ...) there's more than one way to do it in Ember.
As often happens in the [Ember](https://emberjs.com/) world, "there's an addon for that". Try searching [for `mdi` on emberobserver.com](https://emberobserver.com/?query=mdi) for other addons or integrate the icons directly into your application yourself.

## Third Party

### `ember-mdi`

Refer to the [addon's README.md](https://github.com/kaermorchen/ember-mdi#getting-started) for documentation.
In short, it uses [`@mdi/svg`](https://github.com/Pictogrammers/MaterialDesign-SVG) to make an `icons.svg` file in your application's build pipeline and provides a `mdi-icon` component for use in your templates.

## WebFont

Although [using the webfont is generally not recommended](/guide/webfont-alternatives) for performance reasons, you can easily use it (or iconify) in your Ember app.

> **TODO:** ping @jacobq to write this if the date is past 2018/12/16
