"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?9cebf6c64b3afbbd1e5e85b7a074ae9d#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?9cebf6c64b3afbbd1e5e85b7a074ae9d#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?9cebf6c64b3afbbd1e5e85b7a074ae9d#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?9cebf6c64b3afbbd1e5e85b7a074ae9d#vusion-icon-font") format("svg");\n}'},webpackJsonp([35],{470:function(t,s,a){function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=i,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var i="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},503:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{value:"#EE867D",options:[{value:"#EE867D"},{value:"#805DCF"},{value:"#40CCCA"},{value:"#FFCA12"},{value:"#30A8DC"},{value:"#E1AEF6"},{value:"#D2D2D2"}]}},methods:{select:function(t){console.log(t),this.value=t}}},n={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-color-select",{attrs:{options:t.options,value:t.value},on:{select:function(s){t.select(s.value)}}})},staticRenderFns:[]},i={components:{Cb3eea4:a(0)(e,n,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("颜色选择扩展 SelectColor")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("h3",[this._v("方法")]),s("div",{staticClass:"u-example"},[s("Cb3eea4")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-color-select")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":options")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"options"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("@select")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"select($event.value)"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-color-select")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'#EE867D'")]),this._v(",\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("options")]),this._v(": [\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'#EE867D'")]),this._v(",\n                },\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(":"),s("span",{attrs:{class:"hljs-string"}},[this._v("'#805DCF'")]),this._v("\n                },\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(":"),s("span",{attrs:{class:"hljs-string"}},[this._v("'#40CCCA'")]),this._v("\n                },\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(":"),s("span",{attrs:{class:"hljs-string"}},[this._v("'#FFCA12'")]),this._v("\n                },\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(":"),s("span",{attrs:{class:"hljs-string"}},[this._v("'#30A8DC'")]),this._v("\n                },\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(":"),s("span",{attrs:{class:"hljs-string"}},[this._v("'#E1AEF6'")]),this._v("\n                },\n                {\n                    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(":"),s("span",{attrs:{class:"hljs-string"}},[this._v("'#D2D2D2'")]),this._v("\n                },\n            ],\n        };\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        select(value) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(value);\n            "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value = value;\n        }\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("width")]),s("td",[this._v("String/Number")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("输入框长度")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Events")]),s("h4",[this._v("@select")]),s("p",[this._v("选中列表项时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.selected")]),s("td",[this._v("Object")]),s("td",[this._v("选中后的列表对象")])]),s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("String")]),s("td",[this._v("选中后的列表对象的值")])])])]),s("h4",[this._v("@change")]),s("p",[this._v("开关状态改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.selected")]),s("td",[this._v("Object")]),s("td",[this._v("改变后的列表对象")])]),s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("String")]),s("td",[this._v("改变后的列表对象的值")])])])])])},staticRenderFns:[]},l=a(0)(i,h,!1,null,null,null);s.default=l.exports}});