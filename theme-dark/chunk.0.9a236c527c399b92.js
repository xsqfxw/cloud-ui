"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?cc01ef28b6486b4a522295cf52ac9c0c") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?cc01ef28b6486b4a522295cf52ac9c0c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?cc01ef28b6486b4a522295cf52ac9c0c") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?cc01ef28b6486b4a522295cf52ac9c0c#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?cc01ef28b6486b4a522295cf52ac9c0c") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?cc01ef28b6486b4a522295cf52ac9c0c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?cc01ef28b6486b4a522295cf52ac9c0c") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?cc01ef28b6486b4a522295cf52ac9c0c#vusion-icon-font") format("svg");\n}'},webpackJsonp([0],{531:function(s,t,a){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function h(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},534:function(s,t,a){var i=a(535);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(533)("253db9a3",i,!0)},535:function(s,t,a){(t=s.exports=a(532)(void 0)).push([s.i,"._3v95f2Bn-f6-SLcK{display:inline-block;position:relative;vertical-align:bottom;width:300px;height:300px;padding:20px;background:#f4f4f4;border:2px solid #ccc}._2l-SxtVVMFk2gGSR{position:absolute}",""]),t.locals={well:"_3v95f2Bn-f6-SLcK",block:"_2l-SxtVVMFk2gGSR"}},536:function(s,t,a){var i=a(537);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(533)("25d7feb0",i,!0)},537:function(s,t,a){(t=s.exports=a(532)(void 0)).push([s.i,"._2RtFuAiw871bBYgr{display:inline-block;position:relative;vertical-align:bottom;width:300px;height:300px;padding:20px;background:#f4f4f4;border:2px solid #ccc}._1f96oN5vTAMS93BP{position:absolute}._1f96oN5vTAMS93BP[range-mode=center]{margin-left:-32px;margin-top:-32px}",""]),t.locals={well:"_2RtFuAiw871bBYgr",block:"_1f96oN5vTAMS93BP"}},595:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("div",{class:this.$style.well},[t("u-dragger",{attrs:{range:{left:0,top:0,right:200,bottom:200}}},[t("u-block",{class:this.$style.block,attrs:{size:"normal",color:"primary",inline:""}},[this._v("object")])],1)],1),t("div",{class:this.$style.well},[t("u-dragger",{attrs:{range:"offset-parent"}},[t("u-block",{class:this.$style.block,attrs:{size:"normal",color:"primary",inline:""}},[this._v("offset-parent")])],1)],1)])},staticRenderFns:[]},h={},l={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("div",{class:this.$style.well},[t("u-dragger",{attrs:{range:"offset-parent","range-mode":"inside"}},[t("u-block",{class:this.$style.block,attrs:{size:"normal",color:"primary",inline:""}},[this._v("object")])],1)],1),t("div",{class:this.$style.well},[t("u-dragger",{attrs:{range:"offset-parent","range-mode":"center"}},[t("u-block",{class:this.$style.block,attrs:{"range-mode":"center",size:"normal",color:"primary",inline:""}},[this._v("offset-parent")])],1)],1)])},staticRenderFns:[]},v={},r={components:{Cc69aba:a(1)(null,i,!1,function(s){h.$style=a(534),this.$style=h.$style},null,null).exports,C819518:a(1)(null,l,!1,function(s){v.$style=a(536),this.$style=v.$style},null,null).exports}},n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("拖拽器 Dragger")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-dragger",[t("u-block",{attrs:{size:"normal"}},[this._v("拖我")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(">")]),this._v("拖我"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("轴向约束")]),t("div",{staticClass:"u-example"},[t("u-dragger",{attrs:{axis:"horizontal"}},[t("u-block",{attrs:{size:"normal",inline:""}},[this._v("水平")])],1),t("u-dragger",{attrs:{axis:"vertical"}},[t("u-block",{attrs:{size:"normal",inline:""}},[this._v("垂直")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"horizontal"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("水平"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("垂直"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("网格约束")]),t("div",{staticClass:"u-example"},[t("u-dragger",{attrs:{grid:{x:40,y:30}}},[t("u-block",{attrs:{size:"normal",color:"primary",inline:""}},[this._v("网格")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":grid")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ x: 40, y: 30 }"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("网格"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("范围约束")]),t("div",{staticClass:"u-example"},[t("Cc69aba")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.well"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":range")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ left: 0, top: 0, right: 200, bottom: 200 }"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.block"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("object"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.well"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("range")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"offset-parent"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.block"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("offset-parent"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("module")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".well")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("display")]),this._v(": inline-block;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("position")]),this._v(": relative;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("vertical-align")]),this._v(": bottom;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("padding")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("#f4f4f4")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("border")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("2px")]),this._v(" solid "),t("span",{attrs:{class:"hljs-number"}},[this._v("#ccc")]),this._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".block")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("position")]),this._v(": absolute;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("范围约束模式")]),t("div",{staticClass:"u-example"},[t("C819518")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.well"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("range")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"offset-parent"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("range-mode")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"inside"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.block"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("object"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.well"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("range")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"offset-parent"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("range-mode")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"center"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.block"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("range-mode")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"center"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("offset-parent"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-dragger")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("module")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".well")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("display")]),this._v(": inline-block;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("position")]),this._v(": relative;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("vertical-align")]),this._v(": bottom;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("padding")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("#f4f4f4")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("border")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("2px")]),this._v(" solid "),t("span",{attrs:{class:"hljs-number"}},[this._v("#ccc")]),this._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".block")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("position")]),this._v(": absolute;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".block")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v('[range-mode="center"]')]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("margin-left")]),this._v(": -"),t("span",{attrs:{class:"hljs-number"}},[this._v("32px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("margin-top")]),this._v(": -"),t("span",{attrs:{class:"hljs-number"}},[this._v("32px")]),this._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("axis")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("both")])]),t("td",[this._v("拖拽时移动路径的约束轴向。可选值："),t("code",{pre:!0},[this._v("both")]),this._v("表示可以在任意方向上移动、"),t("code",{pre:!0},[this._v("horizontal")]),this._v("表示限制在水平方向上移动、"),t("code",{pre:!0},[this._v("vertical")]),this._v("表示限制在垂直方向上移动。")])]),t("tr",[t("td",[this._v("grid")]),t("td",[this._v("Object")]),t("td",[t("code",{pre:!0},[this._v("{ x: 0, y: 0 }")])]),t("td",[this._v("f拖拽时移动路径的约束网格。值为一个{x,y}格式的对象，表示水平方向和垂直方向网格的大小。")])]),t("tr",[t("td",[this._v("range")]),t("td",[this._v("String | Object")]),t("td"),t("td",[this._v("拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界。当值为"),t("code",{pre:!0},[this._v("offset-parent")]),this._v("，代理元素限制在offsetParent中移动，仅适用于"),t("code",{pre:!0},[this._v("position")]),this._v("为"),t("code",{pre:!0},[this._v("absolute")]),this._v("的情况。")])]),t("tr",[t("td",[this._v("range-mode")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("inside")])]),t("td",[this._v("拖拽范围模式。可选值："),t("code",{pre:!0},[this._v("inside")]),this._v("表示在拖拽范围内侧移动，"),t("code",{pre:!0},[this._v("center")]),this._v("表示在拖拽范围边缘及内侧移动，"),t("code",{pre:!0},[this._v("outside")]),this._v("表示在拖拽范围外侧及内侧移动。")])]),t("tr",[t("td",[this._v("value")]),t("td",[this._v("Any")]),t("td"),t("td",[this._v("需要传递的值")])]),t("tr",[t("td",[this._v("transfer")]),t("td",[this._v("String | Element")]),t("td",[t("code",{pre:!0},[this._v("'self'")])]),t("td",[this._v("拖拽时的移动元素。可选值："),t("code",{pre:!0},[this._v("'clone'")]),this._v("表示拖拽时拖起自身的一个拷贝，"),t("code",{pre:!0},[this._v("'self'")]),this._v("表示拖拽时拖起自身，也可以直接传入一个元素，或者用slot来设置。")])]),t("tr",[t("td",[this._v("immediate")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否在鼠标按下时立即拖拽。默认为"),t("code",{pre:!0},[this._v("false")]),this._v("，是为了防止鼠标单击等事件频繁触发拖拽操作。")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入需要拖拽的元素，仅一个。")]),t("h4",[this._v("transfer")]),t("p",[this._v("自定义的移动元素。")]),t("h3",[this._v("Events")]),t("h4",[this._v("@dragstart")]),t("p",[this._v("拖拽开始时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.originVM")]),t("td",[this._v("VueComponent")]),t("td",[this._v("拖拽源，为当前的"),t("code",{pre:!0},[this._v("<u-draggable>")])])]),t("tr",[t("td",[this._v("$event.sourceEl")]),t("td",[this._v("Element")]),t("td",[this._v("拖拽起始元素")])]),t("tr",[t("td",[this._v("$event.transferEl")]),t("td",[this._v("Element")]),t("td",[this._v("拖拽移动元素")])]),t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Any")]),t("td",[this._v("需要传递的值")])]),t("tr",[t("td",[this._v("$event.screenX")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于屏幕的水平坐标")])]),t("tr",[t("td",[this._v("$event.screenY")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于屏幕的垂直坐标")])]),t("tr",[t("td",[this._v("$event.clientX")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于浏览器的水平坐标")])]),t("tr",[t("td",[this._v("$event.clientY")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于浏览器的垂直坐标")])]),t("tr",[t("td",[this._v("$event.pageX")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于页面的水平坐标")])]),t("tr",[t("td",[this._v("$event.pageY")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于页面的垂直坐标")])]),t("tr",[t("td",[this._v("$event.startX")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时鼠标指针的水平坐标")])]),t("tr",[t("td",[this._v("$event.startY")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时鼠标指针的垂直坐标")])]),t("tr",[t("td",[this._v("$event.dragX")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),t("tr",[t("td",[this._v("$event.dragY")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),t("tr",[t("td",[this._v("$event.startLeft")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时代理元素的left值")])]),t("tr",[t("td",[this._v("$event.startTop")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时代理元素的top值")])]),t("tr",[t("td",[this._v("$event.left")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时代理元素的left值")])]),t("tr",[t("td",[this._v("$event.top")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时代理元素的top值")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止拖拽流程")])])])]),t("h4",[this._v("@drag")]),t("p",[this._v("正在拖拽时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.originVM")]),t("td",[this._v("VueComponent")]),t("td",[this._v("拖拽源，为当前的"),t("code",{pre:!0},[this._v("<u-draggable>")])])]),t("tr",[t("td",[this._v("$event.sourceEl")]),t("td",[this._v("Element")]),t("td",[this._v("拖拽起始元素")])]),t("tr",[t("td",[this._v("$event.transferEl")]),t("td",[this._v("Element")]),t("td",[this._v("拖拽移动元素")])]),t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Any")]),t("td",[this._v("需要传递的值")])]),t("tr",[t("td",[this._v("$event.screenX")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于屏幕的水平坐标")])]),t("tr",[t("td",[this._v("$event.screenY")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于屏幕的垂直坐标")])]),t("tr",[t("td",[this._v("$event.clientX")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于浏览器的水平坐标")])]),t("tr",[t("td",[this._v("$event.clientY")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于浏览器的垂直坐标")])]),t("tr",[t("td",[this._v("$event.pageX")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于页面的水平坐标")])]),t("tr",[t("td",[this._v("$event.pageY")]),t("td",[this._v("Number")]),t("td",[this._v("鼠标指针相对于页面的垂直坐标")])]),t("tr",[t("td",[this._v("$event.startX")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时鼠标指针的水平坐标")])]),t("tr",[t("td",[this._v("$event.startY")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时鼠标指针的垂直坐标")])]),t("tr",[t("td",[this._v("$event.dragX")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),t("tr",[t("td",[this._v("$event.dragY")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),t("tr",[t("td",[this._v("$event.startLeft")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时代理元素的left值")])]),t("tr",[t("td",[this._v("$event.startTop")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽开始时代理元素的top值")])]),t("tr",[t("td",[this._v("$event.left")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时代理元素的left值")])]),t("tr",[t("td",[this._v("$event.top")]),t("td",[this._v("Number")]),t("td",[this._v("拖拽时代理元素的top值")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止拖拽流程")])])])]),t("h4",[this._v("@dragend")]),t("p",[this._v("拖拽结束时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.originVM")]),t("td",[this._v("VueComponent")]),t("td",[this._v("拖拽源，为当前的"),t("code",{pre:!0},[this._v("<u-draggable>")])])]),t("tr",[t("td",[this._v("$event.sourceEl")]),t("td",[this._v("Element")]),t("td",[this._v("拖拽起始元素")])]),t("tr",[t("td",[this._v("$event.transferEl")]),t("td",[this._v("Element")]),t("td",[this._v("拖拽移动元素")])]),t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Any")]),t("td",[this._v("需要传递的值")])])])]),t("h3",[this._v("Methods")]),t("h4",[this._v("cancel()")]),t("p",[this._v("取消拖拽。")])])},staticRenderFns:[]},e=a(1)(r,n,!1,null,null,null);t.default=e.exports}});