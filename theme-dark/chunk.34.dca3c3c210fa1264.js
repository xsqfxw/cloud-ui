"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?9cebf6c64b3afbbd1e5e85b7a074ae9d#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?9cebf6c64b3afbbd1e5e85b7a074ae9d#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?9cebf6c64b3afbbd1e5e85b7a074ae9d#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?9cebf6c64b3afbbd1e5e85b7a074ae9d") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?9cebf6c64b3afbbd1e5e85b7a074ae9d#vusion-icon-font") format("svg");\n}'},webpackJsonp([34],{470:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function e(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=h,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var h="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},505:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("复合滑块 ComboSlider")]),s("div",{staticClass:"u-example"},[s("u-combo-slider")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("div",{staticClass:"u-example"},[s("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":step")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("unit")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("tip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"步长为10GB"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("禁用")]),s("div",{staticClass:"u-example"},[s("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB",disabled:"",value:40}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":step")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("unit")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("tip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"步长为10GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"40"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("最大/最小值")]),s("div",{staticClass:"u-example"},[s("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB",min:10,max:90,value:40}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":step")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("unit")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("tip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"步长为10GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":min")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":max")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"90"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"40"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value.sync, v-model")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("滑块的值")])]),s("tr",[s("td",[this._v("min")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("最小值")])]),s("tr",[s("td",[this._v("max")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("最大值")])]),s("tr",[s("td",[this._v("step")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("间隔。"),s("code",{pre:!0},[this._v("0")]),this._v("表示连续")])]),s("tr",[s("td",[this._v("unit")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("单位")])]),s("tr",[s("td",[this._v("tip")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("提示")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Events")]),s("h4",[this._v("@input")]),s("p",[this._v("滑块的值改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event")]),s("td",[this._v("Number")]),s("td",[this._v("滑块的值")])])])]),s("h4",[this._v("@change")]),s("p",[this._v("滑块的值改变后触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Number")]),s("td",[this._v("改变后的值")])]),s("tr",[s("td",[this._v("$event.oldValue")]),s("td",[this._v("Number")]),s("td",[this._v("旧的值")])])])])])},staticRenderFns:[]},e=a(0)(null,i,!1,null,null,null);s.default=e.exports}});