"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([51],{518:function(t,e,a){var s="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var e=document.createElement("style"),a=document.getElementsByTagName("head")[0];e.innerHTML=n(t),e.id=s,e.type="text/css",a?a.appendChild(e):window.addEventListener("load",function(){a.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},557:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-article",[a("h1",[t._v("地区选择 RegionSelect")]),a("p",[t._v("该组件从 CascadeSelect 继承，仅填充了中国的行政区数据，其他功能与 CascadeSelect 相同。")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-region-select"),a("u-region-select",{attrs:{value:"浙江,杭州,滨江区"}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"浙江,杭州,滨江区"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("Placeholder")]),a("div",{staticClass:"u-example"},[a("u-region-select",{attrs:{categories:[{label:"省",placeholder:"请选择省份"},{label:"市",placeholder:"请选择城市"},{label:"区",placeholder:"请选择县区"}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '省', placeholder: '请选择省份' },\n    { label: '市', placeholder: '请选择城市' },\n    { label: '区', placeholder: '请选择县区' },\n]\"")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("隐藏空列表")]),a("div",{staticClass:"u-example"},[a("u-region-select",{attrs:{"empty-hidden":"",categories:[{label:"省",placeholder:"请选择省份"},{label:"市",placeholder:"请选择城市"},{label:"区",placeholder:"请选择县区"}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("empty-hidden")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '省', placeholder: '请选择省份' },\n    { label: '市', placeholder: '请选择城市' },\n    { label: '区', placeholder: '请选择县区' },\n]\"")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-region-select")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("data")]),a("td",[t._v("Array<{ text, value }>")]),a("td",[t._v("数据")]),a("td",[t._v("数据列表")])]),a("tr",[a("td",[t._v("value.sync, v-model")]),a("td",[t._v("Any")]),a("td"),a("td",[t._v("当前选择的值")])]),a("tr",[a("td",[t._v("categories")]),a("td",[t._v("Array<{ label, key, placeholder }>")]),a("td",[t._v("数据")]),a("td",[t._v("多级分类")])]),a("tr",[a("td",[t._v("hide-empty")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否隐藏空列表")])]),a("tr",[a("td",[t._v("converter")]),a("td",[t._v("String, Object")]),a("td",[a("code",{pre:!0},[t._v("'join'")])]),a("td",[t._v("value 与 values 的转换器。可选值："),a("code",{pre:!0},[t._v("'join'")]),t._v("表示将 values 数组 join 之后变成 value，"),a("code",{pre:!0},[t._v("'join.number'")]),t._v("与"),a("code",{pre:!0},[t._v("join")]),t._v("类似，只是会考虑它为数字的情况。也可以用"),a("code",{pre:!0},[t._v(":")]),t._v("修改分隔符，类似 Vue 的指令参数，"),a("code",{pre:!0},[t._v("'last-value'")]),t._v("表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象")])]),a("tr",[a("td",[t._v("field")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'value'")])]),a("td",[t._v("显示文本字段")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@input")]),a("p",[t._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("Any")]),a("td",[t._v("选择项的值")])])])]),a("h4",[t._v("@select")]),a("p",[t._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.level")]),a("td",[t._v("Number")]),a("td",[t._v("选择的层级")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.values")]),a("td",[t._v("Array")]),a("td",[t._v("改变后每项值的数组")])]),a("tr",[a("td",[t._v("$event.item")]),a("td",[t._v("Object")]),a("td",[t._v("选择项相关对象")])]),a("tr",[a("td",[t._v("$event.itemVM")]),a("td",[t._v("ListViewItem")]),a("td",[t._v("选择项子组件")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("选择值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Any")]),a("td",[t._v("旧的值")])]),a("tr",[a("td",[t._v("$event.values")]),a("td",[t._v("Array")]),a("td",[t._v("改变后每项值的数组")])]),a("tr",[a("td",[t._v("$event.oldValues")]),a("td",[t._v("Array")]),a("td",[t._v("旧的每项值的数组")])])])])])},staticRenderFns:[]},n=a(0)(null,s,!1,null,null,null);e.default=n.exports}});