"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?3f136971cb3a302815ffc013a7ecf8f4") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?3f136971cb3a302815ffc013a7ecf8f4#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?3f136971cb3a302815ffc013a7ecf8f4") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?3f136971cb3a302815ffc013a7ecf8f4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?3f136971cb3a302815ffc013a7ecf8f4") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?3f136971cb3a302815ffc013a7ecf8f4#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?3f136971cb3a302815ffc013a7ecf8f4") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?3f136971cb3a302815ffc013a7ecf8f4#vusion-icon-font") format("svg");\n}'},webpackJsonp([28],{469:function(a,s,t){var n="ICON-FONT-FILE-STYLE";function l(a){return(a||window.ICON_FONT_STYLE).styleContent||""}function e(a){var s=document.createElement("style"),t=document.getElementsByTagName("head")[0];s.innerHTML=l(a),s.id=n,s.type="text/css",t?t.appendChild(s):window.addEventListener("load",function(){t.appendChild(s)})}a.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},481:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("u-article",[t("h1",[a._v("标签 Label")]),t("h2",[a._v("示例")]),t("h3",[a._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-label",[a._v("Label")]),t("u-label",{attrs:{color:"primary"}},[a._v("Primary")]),t("u-label",{attrs:{color:"success"}},[a._v("Success")]),t("u-label",{attrs:{color:"warning"}},[a._v("Warning")]),t("u-label",{attrs:{color:"error"}},[a._v("Error")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("Label"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"primary"')]),a._v(">")]),a._v("Primary"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"success"')]),a._v(">")]),a._v("Success"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"warning"')]),a._v(">")]),a._v("Warning"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"error"')]),a._v(">")]),a._v("Error"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])]),t("h2",[a._v("API")]),t("h3",[a._v("Slots")]),t("table",[t("thead",[t("tr",[t("th",[a._v("Slot")]),t("th",[a._v("Description")])])]),t("tbody",[t("tr",[t("td",[a._v("(default)")]),t("td",[a._v("在插槽中插入文本或HTML")])])])])])},staticRenderFns:[]},l=t(0)(null,n,!1,null,null,null);s.default=l.exports}});