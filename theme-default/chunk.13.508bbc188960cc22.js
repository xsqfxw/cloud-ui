"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?5dc3cb9c5571e06d46a8d93cdfc555cb") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?5dc3cb9c5571e06d46a8d93cdfc555cb#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?5dc3cb9c5571e06d46a8d93cdfc555cb") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?5dc3cb9c5571e06d46a8d93cdfc555cb#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?5dc3cb9c5571e06d46a8d93cdfc555cb") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?5dc3cb9c5571e06d46a8d93cdfc555cb#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?5dc3cb9c5571e06d46a8d93cdfc555cb") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?5dc3cb9c5571e06d46a8d93cdfc555cb#vusion-icon-font") format("svg");\n}'},webpackJsonp([13],{466:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},500:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("滑块 Slider")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-slider",{attrs:{value:20,step:10}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"20"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("最大值和最小值")]),a("div",{staticClass:"u-example"},[a("u-slider",{attrs:{value:20,min:10,max:50}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"20"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"50"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("连续和间隔")]),a("div",{staticClass:"u-example"},[a("u-grid-layout",[a("u-grid-layout-column",{attrs:{span:6}},[a("u-slider")],1),a("u-grid-layout-column",{attrs:{span:6}},[a("u-slider",{attrs:{step:20}})],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-grid-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-grid-layout-column")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":span")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"6"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-grid-layout-column")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-grid-layout-column")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":span")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"6"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"20"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-slider")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-grid-layout-column")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-grid-layout")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("value.sync, v-model")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("滑块的值")])]),a("tr",[a("td",[t._v("min")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("最小值")])]),a("tr",[a("td",[t._v("max")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("最大值")])]),a("tr",[a("td",[t._v("step")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("间隔。"),a("code",{pre:!0},[t._v("0")]),t._v("表示连续")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@input")]),a("p",[t._v("滑块的值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("Number")]),a("td",[t._v("滑块的值")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("滑块的值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Number")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Number")]),a("td",[t._v("旧的值")])])])])])},staticRenderFns:[]},e=a(0)(null,n,!1,null,null,null);s.default=e.exports}});