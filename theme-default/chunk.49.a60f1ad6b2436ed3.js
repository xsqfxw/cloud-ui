"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?1b55e320df67ee3479028cf786353391") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?1b55e320df67ee3479028cf786353391#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?1b55e320df67ee3479028cf786353391") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?1b55e320df67ee3479028cf786353391#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?1b55e320df67ee3479028cf786353391") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?1b55e320df67ee3479028cf786353391#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?1b55e320df67ee3479028cf786353391") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?1b55e320df67ee3479028cf786353391#vusion-icon-font") format("svg");\n}'},webpackJsonp([49],{473:function(s,t,a){var v="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function _(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=l(s),t.id=v,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(_(),window.HAS_CREATE_FONT_STYLE=!0)}},502:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("单选组 Radios")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-radios",{attrs:{value:"毛巾"}},[a("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-radio",{attrs:{label:"毛巾"}},[s._v("毛巾")]),a("u-radio",{attrs:{label:"沙发"}},[s._v("沙发")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("只读、禁用、禁用某一项")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-radios",{attrs:{value:"毛巾",readonly:""}},[a("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-radio",{attrs:{label:"毛巾"}},[s._v("毛巾")]),a("u-radio",{attrs:{label:"沙发"}},[s._v("沙发")])],1),a("u-radios",{attrs:{value:"毛巾",disabled:""}},[a("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-radio",{attrs:{label:"毛巾"}},[s._v("毛巾")]),a("u-radio",{attrs:{label:"沙发"}},[s._v("沙发")])],1),a("u-radios",{attrs:{value:"坚果"}},[a("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-radio",{attrs:{label:"毛巾",disabled:""}},[s._v("毛巾")]),a("u-radio",{attrs:{label:"沙发",disabled:""}},[s._v("沙发")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("毛巾"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("沙发"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("Radios API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value.sync, v-model")]),a("td",[s._v("Any")]),a("td"),a("td",[s._v("当前选择的值")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入"),a("code",{pre:!0},[s._v("<u-radio>")]),s._v("子组件。")]),a("h3",[s._v("Events")]),a("h4",[s._v("@before-select")]),a("p",[s._v("选择某一项前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("Any")]),a("td",[s._v("选择项的值")])]),a("tr",[a("td",[s._v("$event.oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("$event.itemVM")]),a("td",[s._v("ListViewItem")]),a("td",[s._v("选择项子组件")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止选择流程")])])])]),a("h4",[s._v("@input")]),a("p",[s._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event")]),a("td",[s._v("Any")]),a("td",[s._v("选择项的值")])])])]),a("h4",[s._v("@select")]),a("p",[s._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("Any")]),a("td",[s._v("改变后的值")])]),a("tr",[a("td",[s._v("$event.oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("$event.itemVM")]),a("td",[s._v("ListViewItem")]),a("td",[s._v("选择项子组件")])])])]),a("h4",[s._v("@change")]),a("p",[s._v("选择值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("Any")]),a("td",[s._v("选择项的值")])]),a("tr",[a("td",[s._v("$event.oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("$event.item")]),a("td",[s._v("Object")]),a("td",[s._v("选择项相关对象")])]),a("tr",[a("td",[s._v("$event.itemVM")]),a("td",[s._v("ListViewItem")]),a("td",[s._v("选择项子组件")])])])]),a("h2",[s._v("Radio API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("label")]),a("td",[s._v("Any")]),a("td"),a("td",[s._v("单选框标签。用于关联单选组的值")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("禁用只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("禁用此项")])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入文本或HTML。")]),a("h3",[s._v("Events")]),a("h4",[s._v("@before-select")]),a("p",[s._v("选择此项前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.label")]),a("td",[s._v("Any")]),a("td",[s._v("此项的标签")])]),a("tr",[a("td",[s._v("$event.itemVM")]),a("td",[s._v("ListViewItem")]),a("td",[s._v("此组件")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止选择流程")])])])])])},staticRenderFns:[]},l=a(0)(null,v,!1,null,null,null);t.default=l.exports}});