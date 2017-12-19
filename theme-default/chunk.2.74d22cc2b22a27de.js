"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'},webpackJsonp([2],{528:function(t,n,e){function s(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function a(t){var n=document.createElement("style"),e=document.getElementsByTagName("head")[0];n.innerHTML=s(t),n.id=o,n.type="text/css",e?e.appendChild(n):window.addEventListener("load",function(){e.appendChild(n)})}var o="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(a(),window.HAS_CREATE_FONT_STYLE=!0)}},574:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("u-article",[e("h1",[t._v("文字提示 Tooltip")]),e("h2",[t._v("示例")]),e("h3",[t._v("基本形式")]),e("h4",[t._v("声明式")]),e("div",{staticClass:"u-example"},[e("u-tooltip",{attrs:{size:"normal"}},[e("u-button",[t._v("hover")]),e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[t._v("提示内容")])])],1)],1),e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-tooltip")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("hover"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"content"')]),t._v(">")]),t._v("\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("提示内容"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-tooltip")]),t._v(">")]),t._v("\n")])]),e("h2",[t._v("Popper API")]),e("h3",[t._v("Attrs/Props")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Attr/Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("placement")]),e("td",[t._v("String")]),e("td",[e("code",{pre:!0},[t._v("'bottom'")])]),e("td",[t._v("弹出层的弹出方向：top,bottom,left,right,top-start,top-end...")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("String")]),e("td",[e("code",{pre:!0},[t._v("'提示内容'")])]),e("td",[t._v("提示内容")])]),e("tr",[e("td",[t._v("contentWidth")]),e("td",[t._v("String")]),e("td",[e("code",{pre:!0},[t._v("'auto'")])]),e("td",[t._v("提示内容最大宽度")])]),e("tr",[e("td",[t._v("contentHeight")]),e("td",[t._v("String")]),e("td",[e("code",{pre:!0},[t._v("'auto'")])]),e("td",[t._v("提示内容最大高度")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("String")]),e("td",[e("code",{pre:!0},[t._v("'normal'")])]),e("td",[t._v("大小扩展，支持一个值： "),e("code",{pre:!0},[t._v("'small'")]),t._v(", "),e("code",{pre:!0},[t._v("'normal'")]),t._v(", "),e("code",{pre:!0},[t._v("'large'")]),t._v(", "),e("code",{pre:!0},[t._v("'auto'")]),t._v("，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式")])])])])])},staticRenderFns:[]},a=e(1)(null,s,!1,null,null,null);n.default=a.exports}});