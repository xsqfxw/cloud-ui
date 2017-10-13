/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.ttf","md5":"bc7597b6e243406e05a6cccaf3fdbef2"},"eot":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.eot","md5":"8b03caaea215cca447d95812e9e093f6"},"woff":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.woff","md5":"a07ccc30b9c722eb7976fcb6de73ddb7"},"svg":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.svg","md5":"6eb2973eebdcab0ffcbc919285f3fe73"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.ttf","md5":"bc7597b6e243406e05a6cccaf3fdbef2"},"eot":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.eot","md5":"8b03caaea215cca447d95812e9e093f6"},"woff":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.woff","md5":"a07ccc30b9c722eb7976fcb6de73ddb7"},"svg":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.svg","md5":"6eb2973eebdcab0ffcbc919285f3fe73"}});
                                }webpackJsonp([30],{

/***/ 622:
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

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(736);

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_0d6154fe_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(737);
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
  __WEBPACK_IMPORTED_MODULE_0__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_0d6154fe_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("Pills")]), _vm._v(" "), _c('h2', [_vm._v("Examples")]), _vm._v(" "), _c('h3', [_vm._v("Basic")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pills', [_c('u-pill', [_vm._v("Apple")]), _c('u-pill', [_vm._v("Banana")]), _c('u-pill', [_vm._v("Cake")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("Apple"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("Banana"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("Cake"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("Value")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pills', {
    attrs: {
      "value": "C"
    }
  }, [_c('u-pill', {
    attrs: {
      "value": "A"
    }
  }, [_vm._v("Apple")]), _c('u-pill', {
    attrs: {
      "value": "B"
    }
  }, [_vm._v("Banana")]), _c('u-pill', {
    attrs: {
      "value": "C"
    }
  }, [_vm._v("Cake")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pills")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"A\"")]), _vm._v(">")]), _vm._v("Apple"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"B\"")]), _vm._v(">")]), _vm._v("Banana"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("Cake"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("Readonly & Disabled")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pills', {
    attrs: {
      "value": "C",
      "readonly": ""
    }
  }, [_c('u-pill', {
    attrs: {
      "value": "A"
    }
  }, [_vm._v("Apple")]), _c('u-pill', {
    attrs: {
      "value": "B"
    }
  }, [_vm._v("Banana")]), _c('u-pill', {
    attrs: {
      "value": "C"
    }
  }, [_vm._v("Cake")])], 1), _c('p'), _c('u-pills', {
    attrs: {
      "value": "C",
      "disabled": ""
    }
  }, [_c('u-pill', {
    attrs: {
      "value": "A"
    }
  }, [_vm._v("Apple")]), _c('u-pill', {
    attrs: {
      "value": "B"
    }
  }, [_vm._v("Banana")]), _c('u-pill', {
    attrs: {
      "value": "C"
    }
  }, [_vm._v("Cake")])], 1), _c('p'), _c('u-pills', {
    attrs: {
      "value": "C"
    }
  }, [_c('u-pill', {
    attrs: {
      "value": "A"
    }
  }, [_vm._v("Apple")]), _c('u-pill', {
    attrs: {
      "value": "B",
      "disabled": ""
    }
  }, [_vm._v("Banana")]), _c('u-pill', {
    attrs: {
      "value": "C"
    }
  }, [_vm._v("Cake")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pills")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("readonly")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"A\"")]), _vm._v(">")]), _vm._v("Apple"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"B\"")]), _vm._v(">")]), _vm._v("Banana"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("Cake"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"A\"")]), _vm._v(">")]), _vm._v("Apple"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"B\"")]), _vm._v(">")]), _vm._v("Banana"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("Cake"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"A\"")]), _vm._v(">")]), _vm._v("Apple"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"B\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("Banana"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("Cake"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("Cancelable")]), _vm._v(" "), _c('p', [_vm._v("Try to click twice on an item.")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pills', {
    attrs: {
      "value": "C",
      "cancelable": ""
    }
  }, [_c('u-pill', {
    attrs: {
      "value": "A"
    }
  }, [_vm._v("Apple")]), _c('u-pill', {
    attrs: {
      "value": "B"
    }
  }, [_vm._v("Banana")]), _c('u-pill', {
    attrs: {
      "value": "C"
    }
  }, [_vm._v("Cake")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pills")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("cancelable")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"A\"")]), _vm._v(">")]), _vm._v("Apple"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"B\"")]), _vm._v(">")]), _vm._v("Banana"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"C\"")]), _vm._v(">")]), _vm._v("Cake"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pill")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pills")]), _vm._v(">")]), _vm._v("\n")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});