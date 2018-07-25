# GrapesJS Plugin Boilerplate


<span><a href="https://david-dm.org/artf/grapesjs-plugin-boilerplate#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/artf/grapesjs-plugin-boilerplate.svg" alt="Dev Dependency Status" /></a></span>

This boilerplate helps you quickly start a production ready plugin for GrapesJS. If you don't know from where to start, check this guide [Creating plugins](https://grapesjs.com/docs/modules/Plugins.html). Sections below are also used as boilerplate for your README, follow these steps

### Usage
1. Clone this repository `git clone https://github.com/artf/grapesjs-plugin-boilerplate.git grapesjs-custom-code`
1. Replace in all files `grapesjs-custom-code` with your plugin name
1. Update `package.json`
1. Install dependencies `npm i` and run the local server `npm start`
1. Start creating your plugin from `src/index.js`
1. Show some gif/demo if possible
1. Update README
1. When you're ready update the production file `npm run build`
1. Publish




## Summary

* Plugin name: `grapesjs-custom-code`
* Components
  * `new-component1`
  * `new-component2`
* Blocks
  * `new-block1`
  * `new-block1`
...





## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|





## Download

* CDN
  * `https://unpkg.com/grapesjs-custom-code`
* NPM
  * `npm i grapesjs-custom-code`
* GIT
  * `git clone https://github.com/YOUR-NAME/grapesjs-custom-code.git`





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





## Development

Clone the repository

```sh
$ git clone https://github.com/YOUR-NAME/grapesjs-custom-code.git
$ cd grapesjs-custom-code
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
