/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?187e2065ae265f4e5daf5b839e870470\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?187e2065ae265f4e5daf5b839e870470#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?187e2065ae265f4e5daf5b839e870470\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?187e2065ae265f4e5daf5b839e870470#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?187e2065ae265f4e5daf5b839e870470\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?187e2065ae265f4e5daf5b839e870470#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?187e2065ae265f4e5daf5b839e870470\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?187e2065ae265f4e5daf5b839e870470#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([3],{

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

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7ac05f7d_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(906);
var normalizeComponent = __webpack_require__(0)
/* script */

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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7ac05f7d_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_xbar_chart_vue_README_md_0_fa28c4_vue__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_xbar_chart_vue_README_md_1_590b5f_vue__ = __webpack_require__(903);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
                components: {
                                'Cfa28c4': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_xbar_chart_vue_README_md_0_fa28c4_vue__["a" /* default */],
                                'C590b5f': __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_xbar_chart_vue_README_md_1_590b5f_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_fa28c4_vue__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4d1c6bb8_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_fa28c4_vue__ = __webpack_require__(902);
var normalizeComponent = __webpack_require__(0)
/* script */

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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_fa28c4_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4d1c6bb8_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_fa28c4_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            title: '每星期访问量',
            yaxis: { key: 'week' },
            xaxis: { min: 0 },
            series: [{ key: 'number', name: '访问量' }],
            data: [{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]
        };
    }
});

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-xbar-chart',{attrs:{"border":"","legend":"","title":_vm.title,"x-axis":_vm.xaxis,"y-axis":_vm.yaxis,"series":_vm.series,"data":_vm.data}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_590b5f_vue__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_379e9296_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_590b5f_vue__ = __webpack_require__(905);
var normalizeComponent = __webpack_require__(0)
/* script */

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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_590b5f_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_379e9296_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_590b5f_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            title: '每星期访问量',
            yaxis: { key: 'week' },
            xaxis: { min: 0 },
            stack: 'stack',
            series: [{ key: 'rds' }, { key: 'ncr' }, { key: 'nce' }],
            data: [{ week: '星期一', rds: 150, ncr: 200, nce: 50 }, { week: '星期二', rds: 300, ncr: 340, nce: 20 }, { week: '星期三', rds: 28, ncr: 56, nce: 28 }, { week: '星期四', rds: 200, ncr: 78, nce: 40 }, { week: '星期五', rds: 74, ncr: 100, nce: 74 }, { week: '星期六', rds: 532, ncr: 200, nce: 32 }, { week: '星期日', rds: 420, ncr: 260, nce: 20 }]
        };
    }
});

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-xbar-chart',{attrs:{"border":"","legend":"","stack":_vm.stack,"title":_vm.title,"x-axis":_vm.xaxis,"y-axis":_vm.yaxis,"series":_vm.series,"data":_vm.data}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("柱状图 XBarChart")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-xbar-chart',{attrs:{"border":"","legend":"","title":"每星期访问量","y-axis":{ key: 'week' },"x-axis":{ min: 0 },"series":[{key: 'number', name: '访问量' }],"data":[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-xbar-chart")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("border")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("legend")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"每星期访问量\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":y-axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ key: 'week' }\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":x-axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ min: 0 }\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":series")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[{key: 'number', name: '访问量' }]\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-xbar-chart")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("命令式")]),_c('div',{staticClass:"u-example"},[_c('Cfa28c4')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-xbar-chart")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("border")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("legend")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"title\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":x-axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"xaxis\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":y-axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"yaxis\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":series")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"series\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-xbar-chart")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'每星期访问量'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("yaxis")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'week'")]),_vm._v(" },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("xaxis")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(" },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("series")]),_vm._v(": [{"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'number'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'访问量'")]),_vm._v(" }],\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [{ "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期一'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("150")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期二'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期三'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("28")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期四'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期五'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("74")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期六'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("532")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期日'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("number")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("420")]),_vm._v(" }],\n        }\n    }\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("堆叠数据")]),_c('div',{staticClass:"u-example"},[_c('C590b5f')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-xbar-chart")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("border")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("legend")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":stack")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"stack\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"title\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":x-axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"xaxis\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":y-axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"yaxis\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":series")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"series\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-xbar-chart")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'每星期访问量'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("yaxis")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'week'")]),_vm._v(" },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("xaxis")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(" },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("stack")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'stack'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("series")]),_vm._v(": [{ "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'rds'")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'ncr'")]),_vm._v(" }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'nce'")]),_vm._v(" }],\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期一'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("150")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("50")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期二'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("340")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期三'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("28")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("56")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("28")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期四'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("78")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("40")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期五'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("74")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("100")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("74")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期六'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("532")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("32")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("week")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'星期日'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rds")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("420")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ncr")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("260")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nce")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20")]),_vm._v(" },\n            ],\n        }\n    }\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});