"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?5dc3cb9c5571e06d46a8d93cdfc555cb") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?5dc3cb9c5571e06d46a8d93cdfc555cb#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?5dc3cb9c5571e06d46a8d93cdfc555cb") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?5dc3cb9c5571e06d46a8d93cdfc555cb#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?5dc3cb9c5571e06d46a8d93cdfc555cb") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?5dc3cb9c5571e06d46a8d93cdfc555cb#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?5dc3cb9c5571e06d46a8d93cdfc555cb") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?5dc3cb9c5571e06d46a8d93cdfc555cb#vusion-icon-font") format("svg");\n}'},webpackJsonp([47],{466:function(s,a,t){var v="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function _(s){var a=document.createElement("style"),t=document.getElementsByTagName("head")[0];a.innerHTML=l(s),a.id=v,a.type="text/css",t?t.appendChild(a):window.addEventListener("load",function(){t.appendChild(a)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(_(),window.HAS_CREATE_FONT_STYLE=!0)}},494:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("单选组 Radios")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-radios",{attrs:{value:"毛巾"}},[t("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-radio",{attrs:{label:"毛巾"}},[s._v("毛巾")]),t("u-radio",{attrs:{label:"沙发"}},[s._v("沙发")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("只读、禁用、禁用某一项")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-radios",{attrs:{value:"毛巾",readonly:""}},[t("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-radio",{attrs:{label:"毛巾"}},[s._v("毛巾")]),t("u-radio",{attrs:{label:"沙发"}},[s._v("沙发")])],1),t("u-radios",{attrs:{value:"毛巾",disabled:""}},[t("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-radio",{attrs:{label:"毛巾"}},[s._v("毛巾")]),t("u-radio",{attrs:{label:"沙发"}},[s._v("沙发")])],1),t("u-radios",{attrs:{value:"坚果"}},[t("u-radio",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-radio",{attrs:{label:"毛巾",disabled:""}},[s._v("毛巾")]),t("u-radio",{attrs:{label:"沙发",disabled:""}},[s._v("沙发")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-radios")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),t("h2",[s._v("Radios API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("value.sync, v-model")]),t("td",[s._v("Any")]),t("td"),t("td",[s._v("当前选择的值")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("插入"),t("code",{pre:!0},[s._v("<u-radio>")]),s._v("子组件。")]),t("h3",[s._v("Events")]),t("h4",[s._v("@before-select")]),t("p",[s._v("选择某一项前触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Any")]),t("td",[s._v("选择项的值")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Any")]),t("td",[s._v("旧的值")])]),t("tr",[t("td",[s._v("$event.itemVM")]),t("td",[s._v("ListViewItem")]),t("td",[s._v("选择项子组件")])]),t("tr",[t("td",[s._v("$event.preventDefault")]),t("td",[s._v("Function")]),t("td",[s._v("阻止选择流程")])])])]),t("h4",[s._v("@input")]),t("p",[s._v("选择某一项时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event")]),t("td",[s._v("Any")]),t("td",[s._v("选择项的值")])])])]),t("h4",[s._v("@select")]),t("p",[s._v("选择某一项时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Any")]),t("td",[s._v("改变后的值")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Any")]),t("td",[s._v("旧的值")])]),t("tr",[t("td",[s._v("$event.itemVM")]),t("td",[s._v("ListViewItem")]),t("td",[s._v("选择项子组件")])])])]),t("h4",[s._v("@change")]),t("p",[s._v("选择值改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Any")]),t("td",[s._v("选择项的值")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Any")]),t("td",[s._v("旧的值")])]),t("tr",[t("td",[s._v("$event.item")]),t("td",[s._v("Object")]),t("td",[s._v("选择项相关对象")])]),t("tr",[t("td",[s._v("$event.itemVM")]),t("td",[s._v("ListViewItem")]),t("td",[s._v("选择项子组件")])])])]),t("h2",[s._v("Radio API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("label")]),t("td",[s._v("Any")]),t("td"),t("td",[s._v("单选框标签。用于关联单选组的值")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("禁用只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("禁用此项")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("插入文本或HTML。")]),t("h3",[s._v("Events")]),t("h4",[s._v("@before-select")]),t("p",[s._v("选择此项前触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.label")]),t("td",[s._v("Any")]),t("td",[s._v("此项的标签")])]),t("tr",[t("td",[s._v("$event.itemVM")]),t("td",[s._v("ListViewItem")]),t("td",[s._v("此组件")])]),t("tr",[t("td",[s._v("$event.preventDefault")]),t("td",[s._v("Function")]),t("td",[s._v("阻止选择流程")])])])])])},staticRenderFns:[]},l=t(0)(null,v,!1,null,null,null);a.default=l.exports}});