# Getting Started

> **Information:** icon:information-outline Material Design Icons has been around for many years and is compatible with many technologies and frameworks. Please view the docs menu at the top for an appropriate getting started guide.

## Using the Webfont

One of the easiest ways to use the icons is through the webfont. There is also a hosted CDN option for quick use in demos or development.

<a href="/getting-started/webfont" class="button">icon:language-html5 Learn More (Webfont - Getting Started)</a>

> **Danger:** Using the webfont while easy to use is highly discouraged due to performance and overall request size. Please read the [Webfont Alternatives Guide](/guide/webfont-alternatives) for more details.


## Using SVGs

All icons are designed in vector and provided in SVG format.
<!-- TODO : Explain how to download them -->

### As an Image File

SVGs can be downloaded individually and included the same way as any bitmap image:

```html
<img src="/path/to/icons/example-icon.svg" alt="An example icon" style="width:24px;height:24px" />
```

### Inline SVG

SVG's can be used inline in the HTML.

```html
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
  <path fill="#000000" d="M ... Z" /> <!-- account -->
</svg>
```

Inline SVGs can also be overlayed by adding additional paths.

```html
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
  <path fill="#000000" d="M ... Z" /> <!-- account -->
  <path fill="#990000" d="M ... Z" /> <!-- block-helper -->
</svg>
```

<a href="/getting-started/svg" class="button">icon:svg Learn More (SVG - Getting Started)</a>

## Frameworks

- <a href="/getting-started/react" class="button">icon:react React - Getting Started</a>