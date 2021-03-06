# Vusion Cloud UI

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/cloud-ui.vusion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/cloud-ui.vusion
[david-img]: http://img.shields.io/david/vusion/cloud-ui.svg?style=flat-square
[david-url]: https://david-dm.org/vusion/cloud-ui
[download-img]: https://img.shields.io/npm/dm/cloud-ui.vusion.svg?style=flat-square
[download-url]: https://npmjs.org/package/cloud-ui.vusion

## Install
``` shell
npm install --save cloud-ui.vusion
```

## QuickStart

``` javascript
import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion/dist';
import 'cloud-ui.vusion/dist/index.css';
// 如需引入其他主题，将上面的路径替换为如下不同的主题样式
// import 'cloud-ui.vusion/dist/theme-dark.css';

Vue.use(CloudUI); // 全局安装组件库中的组件、指令等
```

## Migration

### migrate-3-4

从 v0.3.x 升级到 v0.4.x

``` shell
bin/migrate-3-4 ./src
```

### migrate-4-6

从 v0.4.x 升级到 v0.6.x

``` shell
bin/migrate-4-6 ./src
```

### find-by-re

通过正则表达式查找

``` shell
bin/find-by-re ./src '<u-input[\s\S]{0,300}close'
```

## Development

### npm install

安装

### npm run dev

开发

### npm run build:docs

构建文档

需要先`npm run build`和`npm run build:theme`

### npm run build:doc-entry

构建用于物料体系的文档入口。

### npm run deploy

将`public/`下的文档发布到 NOS

### npm run deploy:doc-entry

将`dist-doc-entry/`下的文档入口发布到 NOS

## Changelog

See [Releases](https://github.com/vusion/cloud-ui/releases)

## Contributing

See [Contributing Guide](https://github.com/vusion/DOCUMENTATION/issues/8)

## License

[MIT](LICENSE)
