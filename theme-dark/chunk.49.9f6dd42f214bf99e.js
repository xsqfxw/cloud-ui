"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?9cebf6c64b3afbbd1e5e85b7a074ae9d#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?9cebf6c64b3afbbd1e5e85b7a074ae9d#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?9cebf6c64b3afbbd1e5e85b7a074ae9d#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?9cebf6c64b3afbbd1e5e85b7a074ae9d#vusion-icon-font") format("svg");\n}'},webpackJsonp([49],{470:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function h(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var n="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},494:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("分页 Pagination")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-pagination",{attrs:{total:11}}),s("u-pagination",{attrs:{total:11,page:6}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":total")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"11"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":total")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"11"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":page")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("显示数量")]),s("p",[this._v("当页数多时，可以使用"),s("code",{pre:!0},[this._v("side")]),this._v("和"),s("code",{pre:!0},[this._v("around")]),this._v("来设置两边和中间恒定显示的数量。")]),s("div",{staticClass:"u-example"},[s("u-pagination",{attrs:{total:11,page:6,side:1,around:3}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":total")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"11"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":page")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":side")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":around")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"3"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("只读和禁用")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-pagination",{attrs:{total:11,readonly:""}}),s("u-pagination",{attrs:{total:11,disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":total")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"11"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":total")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"11"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-pagination")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("page")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("1")])]),s("td",[this._v("当前页码")])]),s("tr",[s("td",[this._v("total")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("11")])]),s("td",[this._v("总页数")])]),s("tr",[s("td",[this._v("side")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("2")])]),s("td",[this._v("当页数多时，两边恒定显示的数量")])]),s("tr",[s("td",[this._v("around")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("5")])]),s("td",[this._v("当页数多时，中间恒定显示的数量")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Events")]),s("h4",[this._v("@before-select")]),s("p",[this._v("选择分页前触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.page")]),s("td",[this._v("Number")]),s("td",[this._v("选择的页码")])]),s("tr",[s("td",[this._v("$event.oldPage")]),s("td",[this._v("Number")]),s("td",[this._v("旧的页码")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止选择流程")])])])]),s("h4",[this._v("@select")]),s("p",[this._v("选择分页时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.page")]),s("td",[this._v("Number")]),s("td",[this._v("选择的页码")])]),s("tr",[s("td",[this._v("$event.oldPage")]),s("td",[this._v("Number")]),s("td",[this._v("旧的页码")])])])]),s("h4",[this._v("@change")]),s("p",[this._v("页码改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.page")]),s("td",[this._v("Number")]),s("td",[this._v("当前页码")])]),s("tr",[s("td",[this._v("$event.oldPage")]),s("td",[this._v("Number")]),s("td",[this._v("旧的页码")])])])])])},staticRenderFns:[]},h=a(0)(null,i,!1,null,null,null);s.default=h.exports}});