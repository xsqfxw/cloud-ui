"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?0e7b1f40f920f799b55a4767d745cb64") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?0e7b1f40f920f799b55a4767d745cb64#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?0e7b1f40f920f799b55a4767d745cb64") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?0e7b1f40f920f799b55a4767d745cb64#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?0e7b1f40f920f799b55a4767d745cb64") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?0e7b1f40f920f799b55a4767d745cb64#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?0e7b1f40f920f799b55a4767d745cb64") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?0e7b1f40f920f799b55a4767d745cb64#vusion-icon-font") format("svg");\n}'},webpackJsonp([12],{467:function(s,t,a){function n(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=n(s),t.id=e,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var e="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},481:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("状态图标 StatusIcon")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-status-icon",{attrs:{name:"success"}},[this._v("运行中")]),t("u-status-icon",{attrs:{name:"pause"}},[this._v("已停服")]),t("u-status-icon",{attrs:{name:"warning"}},[this._v("异常")]),t("u-status-icon",{attrs:{name:"waiting"}},[this._v("重启中")]),t("u-status-icon",{attrs:{name:"error"}},[this._v("更新失败")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(">")]),this._v("运行中"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"pause"')]),this._v(">")]),this._v("已停服"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v(">")]),this._v("异常"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"waiting"')]),this._v(">")]),this._v("重启中"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"error"')]),this._v(">")]),this._v("更新失败"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-status-icon")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])])])},staticRenderFns:[]},i=a(0)(null,n,!1,null,null,null);t.default=i.exports}});