"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?7fc67f3d03466e0cdabe292343d596ae") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?7fc67f3d03466e0cdabe292343d596ae#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?7fc67f3d03466e0cdabe292343d596ae") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?7fc67f3d03466e0cdabe292343d596ae#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?7fc67f3d03466e0cdabe292343d596ae") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?7fc67f3d03466e0cdabe292343d596ae#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?7fc67f3d03466e0cdabe292343d596ae") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?7fc67f3d03466e0cdabe292343d596ae#vusion-icon-font") format("svg");\n}'},webpackJsonp([29],{472:function(s,a,t){var l="ICON-FONT-FILE-STYLE";function n(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function r(s){var a=document.createElement("style"),t=document.getElementsByTagName("head")[0];a.innerHTML=n(s),a.id=l,a.type="text/css",t?t.appendChild(a):window.addEventListener("load",function(){t.appendChild(a)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},497:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("单行输入")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("p",[s._v("大部分属性与"),t("code",{pre:!0},[s._v("<input>")]),s._v("元素一致。")]),t("div",{staticClass:"u-example"},[t("u-input",{attrs:{maxlength:"12",placeholder:"1~12位小写字母",autofocus:""}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("maxlength")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1~12位小写字母"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("autofocus")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("加密")]),t("div",{staticClass:"u-example"},[t("u-input",{attrs:{type:"password",maxlength:"12",placeholder:"请输入密码"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"password"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("maxlength")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"请输入密码"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("只读与禁用")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-input",{attrs:{value:"只读",readonly:""}}),t("u-input",{attrs:{value:"禁用",disabled:""}})],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"只读"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"禁用"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("大小扩展")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",[t("u-input",{attrs:{size:"mini",value:"mini",readonly:""}}),t("u-input",{attrs:{size:"mini small",value:"mini small",readonly:""}}),t("u-input",{attrs:{size:"mini normal",value:"mini normal",readonly:""}}),t("u-input",{attrs:{size:"mini large",value:"mini large",readonly:""}})],1),t("u-linear-layout",[t("u-input",{attrs:{size:"small mini",value:"small mini",readonly:""}}),t("u-input",{attrs:{size:"small",value:"small",readonly:""}}),t("u-input",{attrs:{size:"small normal",value:"small normal",readonly:""}}),t("u-input",{attrs:{size:"small large",value:"small large",readonly:""}})],1),t("u-linear-layout",[t("u-input",{attrs:{size:"normal mini",value:"normal mini",readonly:""}}),t("u-input",{attrs:{size:"normal small",value:"normal small",readonly:""}}),t("u-input",{attrs:{value:"normal",readonly:""}}),t("u-input",{attrs:{size:"normal large",value:"normal large",readonly:""}})],1),t("u-linear-layout",[t("u-input",{attrs:{size:"large mini",value:"large mini",readonly:""}}),t("u-input",{attrs:{size:"large small",value:"large small",readonly:""}}),t("u-input",{attrs:{size:"large normal",value:"large normal",readonly:""}}),t("u-input",{attrs:{size:"large",value:"large",readonly:""}})],1),t("u-linear-layout",[t("u-input",{attrs:{size:"huge",value:"huge",readonly:""}})],1),t("u-linear-layout",[t("u-input",{attrs:{size:"huge full",value:"huge full",readonly:""}})],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mini large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large mini"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large normal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"huge full"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"huge full"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-input")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),t("h2",[s._v("API")]),t("h3",[s._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Attr/Prop")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("type")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'text'")])]),t("td",[s._v("输入框的类型，目前只支持两种："),t("code",{pre:!0},[s._v("'text'")]),s._v("和"),t("code",{pre:!0},[s._v("'password'")])])]),t("tr",[t("td",[s._v("value")]),t("td",[s._v("String")]),t("td"),t("td",[s._v("输入框的值")])]),t("tr",[t("td",[s._v("placeholder")]),t("td",[s._v("String")]),t("td"),t("td",[s._v("原生属性")])]),t("tr",[t("td",[s._v("maxlength")]),t("td",[s._v("Number")]),t("td"),t("td",[s._v("原生属性")])]),t("tr",[t("td",[s._v("autofocus")]),t("td",[s._v("Boolean")]),t("td"),t("td",[s._v("原生属性")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td"),t("td",[s._v("原生属性")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td"),t("td",[s._v("原生属性")])]),t("tr",[t("td",[s._v("size")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'normal'")])]),t("td",[s._v("大小扩展，支持一个值："),t("code",{pre:!0},[s._v("'mini'")]),s._v(", "),t("code",{pre:!0},[s._v("'small'")]),s._v(", "),t("code",{pre:!0},[s._v("'normal'")]),s._v(", "),t("code",{pre:!0},[s._v("'large'")]),s._v(", "),t("code",{pre:!0},[s._v("'huge'")]),s._v(", "),t("code",{pre:!0},[s._v("'full'")]),s._v("，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("h4",[s._v("@input")]),t("p",[s._v("输入时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event")]),t("td",[s._v("String")]),t("td",[s._v("输入框的值")])])])]),t("h4",[s._v("@change")]),t("p",[s._v("值变化时触发（与原生事件不同）")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("String")]),t("td",[s._v("改变后的值")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("String")]),t("td",[s._v("旧的值")])])])]),t("h4",[s._v("@focus")]),t("p",[s._v("获得焦点时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event")]),t("td",[s._v("String")]),t("td",[s._v("原生事件对象")])])])]),t("h4",[s._v("@blur")]),t("p",[s._v("失去焦点时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event")]),t("td",[s._v("String")]),t("td",[s._v("原生事件对象")])])])])])},staticRenderFns:[]},n=t(0)(null,l,!1,null,null,null);a.default=n.exports}});