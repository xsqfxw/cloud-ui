/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?187e2065ae265f4e5daf5b839e870470\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?187e2065ae265f4e5daf5b839e870470#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?187e2065ae265f4e5daf5b839e870470\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?187e2065ae265f4e5daf5b839e870470#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?187e2065ae265f4e5daf5b839e870470\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?187e2065ae265f4e5daf5b839e870470#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?187e2065ae265f4e5daf5b839e870470\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?187e2065ae265f4e5daf5b839e870470#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([37],{

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig || window.ICON_FONT_STYLE;
    return style.styleContent || '';
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'), headElement = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type = 'text/css';
    if (headElement) {
        headElement.appendChild(styleTag);
    } else {
        window.addEventListener('load', function () {
            headElement.appendChild(styleTag);
        });
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if (!styleTag) {
        addStyle(fontConfig);
    } else {
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports = function() {
    if (window.HAS_CREATE_FONT_STYLE) {
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if (false) {
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_73afecae_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(754);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_73afecae_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("单行输入")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('p',[_vm._v("大部分属性与"),_c('code',{pre:true},[_vm._v("<input>")]),_vm._v("元素一致。")]),_c('div',{staticClass:"u-example"},[_c('u-input',{attrs:{"maxlength":"12","placeholder":"1~12位小写字母","autofocus":""}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1~12位小写字母\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autofocus")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("加密")]),_c('div',{staticClass:"u-example"},[_c('u-input',{attrs:{"type":"password","maxlength":"12","placeholder":"请输入密码"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"password\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入密码\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读与禁用")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',[_c('u-input',{attrs:{"value":"只读","readonly":""}}),_c('u-input',{attrs:{"value":"禁用","disabled":""}})],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"只读\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"禁用\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("大小扩展")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',{attrs:{"direction":"vertical"}},[_c('u-linear-layout',[_c('u-input',{attrs:{"size":"mini","value":"mini","readonly":""}}),_c('u-input',{attrs:{"size":"mini small","value":"mini small","readonly":""}}),_c('u-input',{attrs:{"size":"mini normal","value":"mini normal","readonly":""}}),_c('u-input',{attrs:{"size":"mini large","value":"mini large","readonly":""}})],1),_c('u-linear-layout',[_c('u-input',{attrs:{"size":"small mini","value":"small mini","readonly":""}}),_c('u-input',{attrs:{"size":"small","value":"small","readonly":""}}),_c('u-input',{attrs:{"size":"small normal","value":"small normal","readonly":""}}),_c('u-input',{attrs:{"size":"small large","value":"small large","readonly":""}})],1),_c('u-linear-layout',[_c('u-input',{attrs:{"size":"normal mini","value":"normal mini","readonly":""}}),_c('u-input',{attrs:{"size":"normal small","value":"normal small","readonly":""}}),_c('u-input',{attrs:{"value":"normal","readonly":""}}),_c('u-input',{attrs:{"size":"normal large","value":"normal large","readonly":""}})],1),_c('u-linear-layout',[_c('u-input',{attrs:{"size":"large mini","value":"large mini","readonly":""}}),_c('u-input',{attrs:{"size":"large small","value":"large small","readonly":""}}),_c('u-input',{attrs:{"size":"large normal","value":"large normal","readonly":""}}),_c('u-input',{attrs:{"size":"large","value":"large","readonly":""}})],1),_c('u-linear-layout',[_c('u-input',{attrs:{"size":"huge","value":"huge","readonly":""}})],1),_c('u-linear-layout',[_c('u-input',{attrs:{"size":"huge full","value":"huge full","readonly":""}})],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("direction")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vertical\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mini large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large mini\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large small\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"huge\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"huge\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"huge full\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"huge full\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Attrs/Props")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Attr/Prop")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("type")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'text'")])]),_c('td',[_vm._v("输入框的类型，目前只支持两种："),_c('code',{pre:true},[_vm._v("'text'")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("'password'")])])]),_c('tr',[_c('td',[_vm._v("value")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("输入框的值")])]),_c('tr',[_c('td',[_vm._v("placeholder")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("原生属性")])]),_c('tr',[_c('td',[_vm._v("maxlength")]),_c('td',[_vm._v("Number")]),_c('td'),_c('td',[_vm._v("原生属性")])]),_c('tr',[_c('td',[_vm._v("autofocus")]),_c('td',[_vm._v("Boolean")]),_c('td'),_c('td',[_vm._v("原生属性")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td'),_c('td',[_vm._v("原生属性")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td'),_c('td',[_vm._v("原生属性")])]),_c('tr',[_c('td',[_vm._v("size")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'normal'")])]),_c('td',[_vm._v("大小扩展，支持一个值："),_c('code',{pre:true},[_vm._v("'mini'")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("'small'")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("'normal'")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("'large'")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("'huge'")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("'full'")]),_vm._v("，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('h4',[_vm._v("@input")]),_c('p',[_vm._v("输入时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("输入框的值")])])])]),_c('h4',[_vm._v("@change")]),_c('p',[_vm._v("值变化时触发（与原生事件不同）")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("改变后的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("旧的值")])])])]),_c('h4',[_vm._v("@focus")]),_c('p',[_vm._v("获得焦点时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("原生事件对象")])])])]),_c('h4',[_vm._v("@blur")]),_c('p',[_vm._v("失去焦点时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("原生事件对象")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});