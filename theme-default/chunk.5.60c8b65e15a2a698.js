"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'},webpackJsonp([5],{528:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var e="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},554:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("Textarea")]),s("h2",[this._v("Examples")]),s("h3",[this._v("Basic")]),s("p",[this._v("Most attributes are inherited from "),s("code",{pre:!0},[this._v("<textarea>")]),this._v(" element.")]),s("div",{staticClass:"u-example"},[s("u-textarea",{attrs:{placeholder:"Details",autofocus:""}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("placeholder")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Details"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("autofocus")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("Readonly & Disabled")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-textarea",{attrs:{value:"Readonly",readonly:""}}),s("u-textarea",{attrs:{value:"Disabled",disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Readonly"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Disabled"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("大小扩展")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-linear-layout",[s("u-textarea",{attrs:{size:"normal",value:"normal",readonly:""}})],1),s("u-linear-layout",[s("u-textarea",{attrs:{size:"large",value:"large",readonly:""}})],1),s("u-linear-layout",[s("u-textarea",{attrs:{size:"huge",value:"huge",readonly:""}})],1)],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-textarea")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Attrs/Props")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Attr/Prop")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("The value")])]),s("tr",[s("td",[this._v("placeholder")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("Original attribute")])]),s("tr",[s("td",[this._v("maxlength")]),s("td",[this._v("Number")]),s("td"),s("td",[this._v("Original attribute")])]),s("tr",[s("td",[this._v("autofocus")]),s("td",[this._v("Boolean")]),s("td"),s("td",[this._v("Original attribute")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td"),s("td",[this._v("Original attribute")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td"),s("td",[this._v("Original attribute")])])])]),s("h3",[this._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Slot")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("(default)")]),s("td")])])])])},staticRenderFns:[]},l=a(1)(null,i,!1,null,null,null);s.default=l.exports}});