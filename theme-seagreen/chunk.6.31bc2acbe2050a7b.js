"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?e0fcfd991dcf3abad4726199608eba13") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?e0fcfd991dcf3abad4726199608eba13#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?e0fcfd991dcf3abad4726199608eba13") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?e0fcfd991dcf3abad4726199608eba13#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?e0fcfd991dcf3abad4726199608eba13") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?e0fcfd991dcf3abad4726199608eba13#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?e0fcfd991dcf3abad4726199608eba13") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?e0fcfd991dcf3abad4726199608eba13#vusion-icon-font") format("svg");\n}'},webpackJsonp([6],{479:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},491:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("u-tag",{attrs:{closeable:this.closeable,color:this.color}},[this._v(this._s(this.text))])},staticRenderFns:[]},e={components:{Cb80219:a(0)({data:function(){return{closeable:!0,text:"标签一",color:"#ff4949"}},methods:{}},n,!1,null,null,null).exports}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("选择扩展 Tag")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("h4",[t._v("声明式")]),a("div",{staticClass:"u-example"},[a("u-tag",{attrs:{type:"primary"}},[t._v("标签一")])],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-tag")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("标签一"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-tag")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("方法")]),a("div",{staticClass:"u-example"},[a("Cb80219")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-tag")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":closeable")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"closeable"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"color"')]),t._v(">")]),t._v("{{text}}"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-tag")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("closeable")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'标签一'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#ff4949'")]),t._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])},staticRenderFns:[]},r=a(0)(e,l,!1,null,null,null);s.default=r.exports}});