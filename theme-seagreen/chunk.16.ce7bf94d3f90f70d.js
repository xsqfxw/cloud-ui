"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([16],{518:function(t,e,n){var a="ICON-FONT-FILE-STYLE";function s(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function r(t){var e=document.createElement("style"),n=document.getElementsByTagName("head")[0];e.innerHTML=s(t),e.id=a,e.type="text/css",n?n.appendChild(e):window.addEventListener("load",function(){n.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-article",[n("h1",[t._v("弹窗 PieChart")]),n("h2",[t._v("示例")]),n("h3",[t._v("基本形式")]),n("div",{staticClass:"u-example"},[n("u-pie-chart",{attrs:{border:"",legend:"",title:"每星期访问量",data:[{percent:25,name:"selector1"},{percent:25,name:"selector2"},{percent:25,name:"selector3"},{percent:25,name:"selector4"}]}})],1),n("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("legend")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v('"每星期访问量"')]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { 'percent': 25, 'name': 'selector1' }, \n    { 'percent': 25, 'name': 'selector2' }, \n    { 'percent': 25, 'name': 'selector3' }, \n    { 'percent': 25, 'name': 'selector4' }\n]\"")]),t._v(">")]),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(">")]),t._v("\n")])]),n("h4",[t._v("百分比都为 0")]),n("div",{staticClass:"u-example"},[n("u-pie-chart",{attrs:{border:"",legend:"",title:"每星期访问量",data:[{percent:0,name:"selector1"},{percent:0,name:"selector2"},{percent:0,name:"selector3"},{percent:0,name:"selector4"}]}})],1),n("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("legend")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v('"每星期访问量"')]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),n("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { 'percent': 0, 'name': 'selector1' }, \n    { 'percent': 0, 'name': 'selector2' }, \n    { 'percent': 0, 'name': 'selector3' }, \n    { 'percent': 0, 'name': 'selector4' }\n]\"")]),t._v(">")]),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(">")]),t._v("\n")])]),n("h2",[t._v("API")]),n("h3",[t._v("Attrs/Props")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Prop")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("title")]),n("td",[t._v("String")]),n("td"),n("td",[t._v("图表的标题")])]),n("tr",[n("td",[t._v("caption")]),n("td",[t._v("String")]),n("td"),n("td",[t._v("图表的描述")])]),n("tr",[n("td",[t._v("data")]),n("td",[t._v("Array")]),n("td"),n("td",[t._v("图表需要显示的数据,数组中的对象key值：percent表示占比，请传入整数形式，例30表示30%，name表示占比的名称，会在底部的legend中显示")])]),n("tr",[n("td",[t._v("border")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")]),n("td",[t._v("是否有表框")])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("String")]),n("td",[n("code",{pre:!0},[t._v("100%")])]),n("td",[t._v("图表的宽度")])]),n("tr",[n("td",[t._v("height")]),n("td",[t._v("String")]),n("td",[n("code",{pre:!0},[t._v("480px")])]),n("td",[t._v("图表的高度")])]),n("tr",[n("td",[t._v("titleAlign")]),n("td",[t._v("String")]),n("td",[n("code",{pre:!0},[t._v("center")])]),n("td",[t._v("图表标题的对齐方式，默认是居中，值有:left,center,right")])])])]),n("h3",[t._v("Slot")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Slot")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("tooltipTemplate + index（index为遍历data的索引）")]),n("td",[t._v("自定义tooltip内容")])])])])])},staticRenderFns:[]},s=n(0)(null,a,!1,null,null,null);e.default=s.exports}});