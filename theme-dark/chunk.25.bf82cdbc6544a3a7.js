"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?cc01ef28b6486b4a522295cf52ac9c0c") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?cc01ef28b6486b4a522295cf52ac9c0c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?cc01ef28b6486b4a522295cf52ac9c0c") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?cc01ef28b6486b4a522295cf52ac9c0c#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?cc01ef28b6486b4a522295cf52ac9c0c") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?cc01ef28b6486b4a522295cf52ac9c0c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?cc01ef28b6486b4a522295cf52ac9c0c") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?cc01ef28b6486b4a522295cf52ac9c0c#vusion-icon-font") format("svg");\n}'},webpackJsonp([25],{531:function(s,t,a){function h(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function n(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=h(s),t.id=i,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var i="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},547:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("线性布局 LinearLayout")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("排列方向")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-progress",{attrs:{percent:25}}),t("u-linear-progress",{attrs:{percent:50}}),t("u-linear-progress",{attrs:{percent:75}})],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-progress")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":percent")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"25"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-progress")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-progress")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":percent")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"50"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-progress")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-progress")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":percent")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"75"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-progress")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("间隙")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",{attrs:{gap:"none"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{gap:"small"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{gap:"normal"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{gap:"large"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("gap")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"none"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("gap")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"small"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("gap")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("gap")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("水平分布方式")]),t("p",[this._v("普通的分布方式是用"),t("code",{pre:!0},[this._v("inline-block")]),this._v("与"),t("code",{pre:!0},[this._v("text-align")]),this._v("两个特性实现的，只支持水平方向。")]),t("p",[this._v("如果想使用更灵活的分布方式，请使用下面的Flex模式，并确保您的浏览器支持该功能。")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",{attrs:{justify:"start"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{justify:"center"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{justify:"end"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"start"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"center"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"end"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("Flex模式")]),t("h4",[this._v("主轴分布方式")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",{attrs:{type:"flex",justify:"start"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",justify:"center"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",justify:"end"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",justify:"space-between"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",justify:"space-around"}},[t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")]),t("u-button",[this._v("Button")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"start"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"center"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"end"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"space-between"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("justify")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"space-around"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h4",[this._v("交叉轴对齐方式")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",{attrs:{type:"flex",alignment:"start"}},[t("u-block",[this._v("Button")]),t("u-block",{attrs:{size:"large"}},[this._v("Button")]),t("u-block",{attrs:{size:"huge"}},[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",alignment:"center"}},[t("u-block",[this._v("Button")]),t("u-block",{attrs:{size:"large"}},[this._v("Button")]),t("u-block",{attrs:{size:"huge"}},[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",alignment:"end"}},[t("u-block",[this._v("Button")]),t("u-block",{attrs:{size:"large"}},[this._v("Button")]),t("u-block",{attrs:{size:"huge"}},[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",alignment:"baseline"}},[t("u-block",[this._v("Button")]),t("u-block",{attrs:{size:"large"}},[this._v("Button")]),t("u-block",{attrs:{size:"huge"}},[this._v("Button")])],1),t("u-linear-layout",{attrs:{type:"flex",alignment:"stretch"}},[t("u-block",[this._v("Button")]),t("u-block",{attrs:{size:"large"}},[this._v("Button")]),t("u-block",{attrs:{size:"huge"}},[this._v("Button")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("alignment")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"start"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("alignment")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"center"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("alignment")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"end"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("alignment")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"baseline"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"flex"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("alignment")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"stretch"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("API")]),t("h3",[this._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Attr/Prop")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("direction")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'horizontal'")])]),t("td",[this._v("排列方向，'horizontal'或'vertical'")])]),t("tr",[t("td",[this._v("gap")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'normal'")])]),t("td",[this._v("间隙大小。可选值：'none', 'small', 'normal'或'large'")])]),t("tr",[t("td",[this._v("type")]),t("td",[this._v("String")]),t("td"),t("td",[this._v("布局模式，可选值：'flex'")])]),t("tr",[t("td",[this._v("justify")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'start'")])]),t("td",[this._v("普通模式下可选值：'start', 'center', 'end'。flex布局模式下还支持：'space-between', 'space-around'")])]),t("tr",[t("td",[this._v("alignment")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'stretch'")])]),t("td",[this._v("flex布局模式的交叉轴对齐方式，可选值：'start', 'center', 'end', 'baseline', 'stretch'")])])])]),t("h3",[this._v("Slots")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Slot")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("(default)")]),t("td")])])])])},staticRenderFns:[]},n=a(1)(null,h,!1,null,null,null);t.default=n.exports}});