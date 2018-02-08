"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?5dc3cb9c5571e06d46a8d93cdfc555cb") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?5dc3cb9c5571e06d46a8d93cdfc555cb#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?5dc3cb9c5571e06d46a8d93cdfc555cb") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?5dc3cb9c5571e06d46a8d93cdfc555cb#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?5dc3cb9c5571e06d46a8d93cdfc555cb") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?5dc3cb9c5571e06d46a8d93cdfc555cb#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?5dc3cb9c5571e06d46a8d93cdfc555cb") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?5dc3cb9c5571e06d46a8d93cdfc555cb#vusion-icon-font") format("svg");\n}'},webpackJsonp([18],{466:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function e(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=l(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},492:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{value:12,readonly:!1}},methods:{change:function(s){console.log(s.value)}}},l={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-number-input",{attrs:{value:s.value,readonly:s.readonly},on:{change:s.change}})},staticRenderFns:[]},e={components:{C3897e2:a(0)(n,l,!1,null,null,null).exports}},r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("数字输入 NumberInput")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h4",[s._v("声明式")]),a("h3",[s._v("基本")]),a("div",{staticClass:"u-example"},[a("u-number-input")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("format属性")]),a("div",{staticClass:"u-example"},[a("u-number-input",{attrs:{format:"00",value:"5"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("format")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"00"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("autofocus")]),a("div",{staticClass:"u-example"},[a("u-number-input",{attrs:{value:"12",autofocus:"autofocus"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("autofocus")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"autofocus"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("只读")]),a("div",{staticClass:"u-example"},[a("u-number-input",{attrs:{value:"12",readonly:"readonly"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"readonly"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("最大值 最小值")]),a("div",{staticClass:"u-example"},[a("u-number-input",{attrs:{value:"12",min:"5",max:"20"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("指定宽高")]),a("div",{staticClass:"u-example"},[a("u-number-input",{attrs:{value:"12",width:"150",height:"40"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"150"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"40"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-number-input",{attrs:{value:"12",disabled:"disabled"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("获取改变后的值change方法")]),a("div",{staticClass:"u-example"},[a("C3897e2")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"change"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":readonly")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"readonly"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        change(value) {\n           "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value.value);\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])},staticRenderFns:[]},v=a(0)(e,r,!1,null,null,null);t.default=v.exports}});