"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'},webpackJsonp([15],{528:function(t,s,a){function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function e(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=i,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var i="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},575:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-popover",{attrs:{trigger:"click",content:"内容",placement:"bottom","style-object":this.styleObject}},[s("u-button",[this._v("click 激活")])],1)},staticRenderFns:[]},e={components:{C0b0136:a(1)({data:function(){return{styleObject:{padding:0}}}},n,!1,null,null,null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("气泡提示 Popover")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("h4",[this._v("声明式")]),s("div",{staticClass:"u-example"},[s("C0b0136")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"click"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"内容"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"bottom"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":style-object")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"styleObject"')]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("click 激活"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("styleObject")]),this._v(": {\n                "),s("span",{attrs:{class:"hljs-attr"}},[this._v("padding")]),this._v(": "),s("span",{attrs:{class:"hljs-number"}},[this._v("0")]),this._v(",\n            }\n        }\n    }\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("div",{staticClass:"u-example"},[s("u-popover",{attrs:{trigger:"hover",content:"内容",placement:"top-start"}},[s("u-button",[this._v("hover 激活")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"hover"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"内容"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"top-start"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("hover 激活"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(">")]),this._v("\n")])])])},staticRenderFns:[]},l=a(1)(e,i,!1,null,null,null);s.default=l.exports}});