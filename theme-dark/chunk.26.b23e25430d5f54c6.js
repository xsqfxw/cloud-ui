/* icon font style message */

                            if (window && !window.ICON_FONT_STYLE) {
                                window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.ttf","md5":"9c17123c0c34baa7cebb54b061551644"},"eot":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.eot","md5":"c29cc34dac4a18e333cf017bc870e6b2"},"woff":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.woff","md5":"8067ac0eb899c73e7e1a1d3b493bd6eb"},"svg":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.svg","md5":"031a9a91f4e8c8c5cc7f5018ac705320"}};
                            } else if (window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.ttf","md5":"9c17123c0c34baa7cebb54b061551644"},"eot":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.eot","md5":"c29cc34dac4a18e333cf017bc870e6b2"},"woff":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.woff","md5":"8067ac0eb899c73e7e1a1d3b493bd6eb"},"svg":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.svg","md5":"031a9a91f4e8c8c5cc7f5018ac705320"}});
                            }webpackJsonp([26],{

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig||window.ICON_FONT_STYLE,
        fontName = style.name,  srcStr = [];

    for(var name in style){
        var path  = style[name].path,hash = style[name].md5;
        if(style.hasOwnProperty(name)) {
            switch (name) {
                case 'eot':
                    srcStr.push('url("'+path+'?'+hash+'#iefix") format("embedded-opentype")');
                    break;
                case 'woff':
                    srcStr.push('url("'+path+'?'+hash+'") format("woff")');
                    break;
                case 'ttf':
                    srcStr.push('url("'+path+'?'+hash+'") format("truetype")');
                    break;
                case 'svg':
                    srcStr.push('url("'+path+'?'+hash+'#'+fontName+'") format("svg")');
                    break;
                default:
                    break;
            }
        }
    }
    srcStr = srcStr.join(",\n\t");
    return '@font-face {\n\tfont-family: "'+fontName+'";\n\tsrc:'+srcStr+";\n}";
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'),headElement  = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type="text/css";
    if(headElement){
        headElement.appendChild(styleTag);
    }else{
        window.addEventListener('load',() => {
            headElement.appendChild(styleTag);
        })
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if(!styleTag){
        addStyle(fontConfig);
    }else{
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports= function() {
    if(window.HAS_CREATE_FONT_STYLE){
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if(false){
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(653);

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_608ace8d_hasScoped_false_vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(654);
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_608ace8d_hasScoped_false_vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("链接（Link）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-link', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("链接")]), _vm._v(" "), _c('u-link', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("查看详情")])], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(">")]), _vm._v("链接"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("&nbsp;"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(">")]), _vm._v("查看详情"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("禁用")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-link', {
    attrs: {
      "href": "#",
      "disabled": ""
    }
  }, [_vm._v("Link")])], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("Link"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_c('code', {
    pre: true
  }, [_vm._v("href")]), _vm._v(" vs "), _c('code', {
    pre: true
  }, [_vm._v("to")])]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-link', {
    attrs: {
      "href": "https://github.com/vusion/vusion",
      "target": "_blank"
    }
  }, [_vm._v("href")]), _vm._v(" \n"), _c('u-link', {
    attrs: {
      "to": "/some/router/path"
    }
  }, [_vm._v("to")])], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"https://github.com/vusion/vusion\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("target")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"_blank\"")]), _vm._v(">")]), _vm._v("href"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("&nbsp;\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("to")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"/some/router/path\"")]), _vm._v(">")]), _vm._v("to"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h2', [_vm._v("API")]), _vm._v(" "), _c('h3', [_vm._v("Attrs/Props")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Attr/Prop")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("href")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("href")]), _vm._v(" property of link")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("target")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("(native property)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("to")]), _vm._v(" "), _c('td', [_vm._v("String | Object")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("to")]), _vm._v(" property of "), _c('code', {
    pre: true
  }, [_vm._v("vue-router")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("replace")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("append")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Prevent action of this link")])])])]), _vm._v(" "), _c('h3', [_vm._v("Slots")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Slot")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("(default)")]), _vm._v(" "), _c('td', [_vm._v("Hold the text and can contain HTML")])])])]), _vm._v(" "), _c('h3', [_vm._v("Events")]), _vm._v(" "), _c('h4', [_vm._v("$listeners")]), _vm._v(" "), _c('p', [_vm._v("Inherit all events from "), _c('code', {
    pre: true
  }, [_vm._v("<a>")]), _vm._v(" element.")]), _vm._v(" "), _c('h4', [_vm._v("@click")]), _vm._v(" "), _c('h4', [_vm._v("@navigate")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});