# GrapesJS Custom Code

This plugin adds the possibility to embed custom code

<p align="center"><img src="https://user-images.githubusercontent.com/11614725/43289377-15322c5e-912b-11e8-9a29-cc2dc45af48a.gif" alt="GrapesJS Custom Code" align="center"/></p>

> Requires GrapesJS v0.14.25 or higher


## Summary

* Plugin name: `grapesjs-custom-code`
* Components
  * `custom-code`
* Blocks
  * `custom-code`
* Commands
  * `custom-code:open-modal`




## Options

|Option|Description|Default|
|-|-|-
| `blockLabel` | Label of the custom code block | `Custom Code` |
| `blockCustomCode` | Object to extend the default custom code block, eg. `{ label: 'Custom Code', category: 'Extra', ... }`. Pass a falsy value to avoid adding the block | `{}` |
| `propsCustomCode` | Object to extend the default custom code properties, eg. `{ name: 'Custom Code', droppable: false, ... }` | `{}` |
| `placeholderContent` | Initial content of the custom code component | `<span>Insert here your custom code</span>` |
| `toolbarBtnCustomCode` | Object to extend the default component's toolbar button for the code, eg. `{ label: '</>', attributes: { title: 'Open custom code' } }`. Pass a falsy value to avoid adding the button | `{}` |
| `placeholderScript` | Content to show when the custom code contains `<script>` | [Check the source](https://github.com/artf/grapesjs-custom-code/tree/master/src/index.js) |
| `modalTitle` | Title for the modal | `Insert your code` |
| `codeViewOptions` | Additional options for the code viewer, eg. `{ theme: 'hopscotch', readOnly: 0 }` | `{}` |
| `buttonLabel` | Label for the default save button | `Save` |
| `commandCustomCode` | Object to extend the default custom code command, eg. `{ getPreContent: () => '<div>Paste here</div>' }` [Check the source](https://github.com/artf/grapesjs-custom-code/tree/master/src/commands.js) to see all available methods | `{}` |





## Download

* CDN
  * `https://unpkg.com/grapesjs-custom-code`
* NPM
  * `npm i grapesjs-custom-code`
* GIT
  * `git clone https://github.com/artf/grapesjs-custom-code.git`





## Usage


```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-custom-code.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-custom-code'],
      pluginsOpts: {
        'grapesjs-custom-code': {
          // options
        }
      }
  });
</script>
```

```jsx
import GrapesJS from 'grapesjs';
import customCodePlugin from 'grapesjs-custom-code';

...

GrapesJS.init({
 container : '#gjs',
 ...
 plugins: [
   customCodePlugin
 ],
 pluginsOpts: {
   [customCodePlugin]: {
     // options
   }
 }
});
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-custom-code.git
$ cd grapesjs-custom-code
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
