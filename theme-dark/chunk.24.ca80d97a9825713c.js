"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?3f136971cb3a302815ffc013a7ecf8f4") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?3f136971cb3a302815ffc013a7ecf8f4#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?3f136971cb3a302815ffc013a7ecf8f4") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?3f136971cb3a302815ffc013a7ecf8f4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?3f136971cb3a302815ffc013a7ecf8f4") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?3f136971cb3a302815ffc013a7ecf8f4#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?3f136971cb3a302815ffc013a7ecf8f4") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?3f136971cb3a302815ffc013a7ecf8f4#vusion-icon-font") format("svg");\n}'},webpackJsonp([24],{469:function(t,e,s){var a="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function v(t){var e=document.createElement("style"),s=document.getElementsByTagName("head")[0];e.innerHTML=n(t),e.id=a,e.type="text/css",s?s.appendChild(e):window.addEventListener("load",function(){s.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},477:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("u-article",[s("h1",[t._v("链接 Link")]),s("h2",[t._v("示例")]),s("h3",[t._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-link",{attrs:{href:"#"}},[t._v("链接")]),t._v(" "),s("u-link",{attrs:{href:"#"}},[t._v("查看详情")])],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("链接"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("&nbsp;"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("查看详情"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("禁用")]),s("div",{staticClass:"u-example"},[s("u-link",{attrs:{href:"#",disabled:""}},[t._v("Link")])],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("Link"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])]),s("h3",[s("code",{pre:!0},[t._v("href")]),t._v(" vs "),s("code",{pre:!0},[t._v("to")])]),s("div",{staticClass:"u-example"},[s("u-link",{attrs:{href:"https://vusion.github.io",target:"_blank"}},[t._v("href")]),t._v(" \n"),s("u-link",{attrs:{to:"/components/u-button"}},[t._v("to")])],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"https://vusion.github.io"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("target")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"_blank"')]),t._v(">")]),t._v("href"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("&nbsp;\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"/components/u-button"')]),t._v(">")]),t._v("to"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])]),s("h2",[t._v("API")]),s("h3",[t._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop/Attr")]),s("th",[t._v("Type")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("href")]),s("td",[t._v("String")]),s("td"),s("td",[t._v("链接地址")])]),s("tr",[s("td",[t._v("target")]),s("td",[t._v("String")]),s("td"),s("td",[t._v("（原生属性）")])]),s("tr",[s("td",[t._v("to")]),s("td",[t._v("String,  Location")]),s("td"),s("td",[t._v("需要vue-router，与"),s("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),s("code",{pre:!0},[t._v("to")]),t._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),s("tr",[s("td",[t._v("replace")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("需要vue-router，与"),s("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),s("code",{pre:!0},[t._v("replace")]),t._v("属性相同。如果为"),s("code",{pre:!0},[t._v("true")]),t._v("，当点击时，会调用"),s("code",{pre:!0},[t._v("router.replace()")]),t._v("而不是"),s("code",{pre:!0},[t._v("router.push()")]),t._v("，于是导航后不会留下"),s("code",{pre:!0},[t._v("history")]),t._v("记录。")])]),s("tr",[s("td",[t._v("append")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("需要vue-router，与"),s("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),s("code",{pre:!0},[t._v("append")]),t._v("属性相同。如果为"),s("code",{pre:!0},[t._v("true")]),t._v("，则在当前路径后追加"),s("code",{pre:!0},[t._v("to")]),t._v("的路径。")])]),s("tr",[s("td",[t._v("disabled")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否禁用。禁用后不会响应"),s("code",{pre:!0},[t._v("click")]),t._v("事件。")])])])]),s("h3",[t._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("(default)")]),s("td",[t._v("插入文本或HTML")])])])]),s("h3",[t._v("Events")]),s("h4",[t._v("$listeners")]),s("p",[t._v("监听所有"),s("code",{pre:!0},[t._v("<a>")]),t._v("元素的事件。")]),s("h4",[t._v("@before-navigate")]),s("p",[t._v("使用router相关属性切换路由前触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.to")]),s("td",[t._v("String,  Location")]),s("td",[s("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),s("tr",[s("td",[t._v("$event.replace")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),s("tr",[s("td",[t._v("$event.append")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("append")]),t._v("属性的值")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止切换流程")])])])]),s("h4",[t._v("@navigate")]),s("p",[t._v("使用router相关属性切换路由时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.to")]),s("td",[t._v("String,  Location")]),s("td",[s("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),s("tr",[s("td",[t._v("$event.replace")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),s("tr",[s("td",[t._v("$event.append")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("append")]),t._v("属性的值")])])])])])},staticRenderFns:[]},n=s(0)(null,a,!1,null,null,null);e.default=n.exports}});