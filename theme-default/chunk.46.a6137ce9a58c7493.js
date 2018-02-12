"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?0e7b1f40f920f799b55a4767d745cb64") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?0e7b1f40f920f799b55a4767d745cb64#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?0e7b1f40f920f799b55a4767d745cb64") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?0e7b1f40f920f799b55a4767d745cb64#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?0e7b1f40f920f799b55a4767d745cb64") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?0e7b1f40f920f799b55a4767d745cb64#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?0e7b1f40f920f799b55a4767d745cb64") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?0e7b1f40f920f799b55a4767d745cb64#vusion-icon-font") format("svg");\n}'},webpackJsonp([46],{467:function(t,e,i){function o(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var e=document.createElement("style"),i=document.getElementsByTagName("head")[0];e.innerHTML=o(t),e.id=s,e.type="text/css",i?i.appendChild(e):window.addEventListener("load",function(){i.appendChild(e)})}var s="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},529:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("u-article",[e("h1",[this._v("路由项 RouterItem")]),e("h2",[this._v("API")]),e("h3",[this._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[this._v("Prop/Attr")]),e("th",[this._v("Type")]),e("th",[this._v("Default")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("href")]),e("td",[this._v("String")]),e("td"),e("td",[this._v("链接地址")])]),e("tr",[e("td",[this._v("target")]),e("td",[this._v("String")]),e("td"),e("td",[this._v("打开方式")])]),e("tr",[e("td",[this._v("to")]),e("td",[this._v("String, Location")]),e("td"),e("td",[this._v("需要vue-router，与"),e("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),e("code",{pre:!0},[this._v("to")]),this._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),e("tr",[e("td",[this._v("replace")]),e("td",[this._v("Boolean")]),e("td",[e("code",{pre:!0},[this._v("false")])]),e("td",[this._v("需要vue-router，与"),e("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),e("code",{pre:!0},[this._v("replace")]),this._v("属性相同。如果为"),e("code",{pre:!0},[this._v("true")]),this._v("，当点击时，会调用"),e("code",{pre:!0},[this._v("router.replace()")]),this._v("而不是"),e("code",{pre:!0},[this._v("router.push()")]),this._v("，于是导航后不会留下"),e("code",{pre:!0},[this._v("history")]),this._v("记录。")])]),e("tr",[e("td",[this._v("exact")]),e("td",[this._v("Boolean")]),e("td",[e("code",{pre:!0},[this._v("false")])]),e("td",[this._v("需要vue-router，与"),e("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),e("code",{pre:!0},[this._v("exact")]),this._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),e("h3",[this._v("Events")]),e("h4",[this._v("@before-navigate")]),e("p",[this._v("使用router相关属性切换路由前触发")]),e("table",[e("thead",[e("tr",[e("th",[this._v("Param")]),e("th",[this._v("Type")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("$event.to")]),e("td",[this._v("String, Location")]),e("td",[e("code",{pre:!0},[this._v("to")]),this._v("属性的值")])]),e("tr",[e("td",[this._v("$event.replace")]),e("td",[this._v("Boolean")]),e("td",[e("code",{pre:!0},[this._v("replace")]),this._v("属性的值")])]),e("tr",[e("td",[this._v("$event.exact")]),e("td",[this._v("Boolean")]),e("td",[e("code",{pre:!0},[this._v("exact")]),this._v("属性的值")])]),e("tr",[e("td",[this._v("$event.preventDefault")]),e("td",[this._v("Function")]),e("td",[this._v("阻止切换流程")])])])]),e("h4",[this._v("@navigate")]),e("p",[this._v("使用router相关属性切换路由时触发")]),e("table",[e("thead",[e("tr",[e("th",[this._v("Param")]),e("th",[this._v("Type")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("$event.to")]),e("td",[this._v("String, Location")]),e("td",[e("code",{pre:!0},[this._v("to")]),this._v("属性的值")])]),e("tr",[e("td",[this._v("$event.replace")]),e("td",[this._v("Boolean")]),e("td",[e("code",{pre:!0},[this._v("replace")]),this._v("属性的值")])]),e("tr",[e("td",[this._v("$event.exact")]),e("td",[this._v("Boolean")]),e("td",[e("code",{pre:!0},[this._v("exact")]),this._v("属性的值")])])])])])},staticRenderFns:[]},n=i(0)(null,o,!1,null,null,null);e.default=n.exports}});