"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?242d565c2aa6a33bc0487808b0001fd7") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?242d565c2aa6a33bc0487808b0001fd7#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?242d565c2aa6a33bc0487808b0001fd7") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?242d565c2aa6a33bc0487808b0001fd7#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?242d565c2aa6a33bc0487808b0001fd7") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?242d565c2aa6a33bc0487808b0001fd7#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?242d565c2aa6a33bc0487808b0001fd7") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?242d565c2aa6a33bc0487808b0001fd7#vusion-icon-font") format("svg");\n}'},webpackJsonp([18],{473:function(s,t,a){function n(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=n(s),t.id=h,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var h="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},499:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{value:12,readonly:!1}},methods:{change:function(s){console.log(s.value)}}},i={render:function(){var s=this.$createElement;return(this._self._c||s)("u-number-input",{attrs:{value:this.value,readonly:this.readonly},on:{change:this.change}})},staticRenderFns:[]},h={components:{Cba81af:a(0)(n,i,!1,null,null,null).exports}},e={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("数字输入 NumberInput")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("h4",[this._v("声明式")]),t("h3",[this._v("基本")]),t("div",{staticClass:"u-example"},[t("u-number-input")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("format属性")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{format:"00",value:"5"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("format")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"00"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"5"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("autofocus")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",autofocus:"autofocus"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"12"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("autofocus")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"autofocus"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("只读")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",readonly:"readonly"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"12"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"readonly"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("最大值 最小值")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",min:"5",max:"20"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"12"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("min")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"5"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("max")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"20"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("指定宽高")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",width:"150",height:"40"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"12"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("width")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"150"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("height")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"40"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("禁用")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",disabled:"disabled"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"12"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"disabled"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("获取改变后的值change方法")]),t("div",{staticClass:"u-example"},[t("Cba81af")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@change")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"change"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":readonly")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"readonly"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n\tdata() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("12")]),this._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(",\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        change(value) {\n           "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(value.value);\n        },\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("String")]),t("td",[this._v("0")]),t("td",[this._v("文本框的值")])]),t("tr",[t("td",[this._v("min")]),t("td",[this._v("Number")]),t("td"),t("td",[this._v("最小值")])]),t("tr",[t("td",[this._v("max")]),t("td",[this._v("Number")]),t("td"),t("td",[this._v("最大值")])]),t("tr",[t("td",[this._v("autofocus")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否自动获得焦点")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])]),t("tr",[t("td",[this._v("width")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("140")])]),t("td",[this._v("输入框宽度")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("34")])]),t("td",[this._v("输入框高度")])])])]),t("h3",[this._v("Events")]),t("h4",[this._v("@change")]),t("p",[this._v("数值改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Number")]),t("td",[this._v("改变后的数值")])])])])])},staticRenderFns:[]},l=a(0)(h,e,!1,null,null,null);t.default=l.exports}});