"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?0e7b1f40f920f799b55a4767d745cb64") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?0e7b1f40f920f799b55a4767d745cb64#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?0e7b1f40f920f799b55a4767d745cb64") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?0e7b1f40f920f799b55a4767d745cb64#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?0e7b1f40f920f799b55a4767d745cb64") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?0e7b1f40f920f799b55a4767d745cb64#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?0e7b1f40f920f799b55a4767d745cb64") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?0e7b1f40f920f799b55a4767d745cb64#vusion-icon-font") format("svg");\n}'},webpackJsonp([20],{467:function(s,t,a){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function h(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},499:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{value:[],options:[{value:"选项1",text:"黄金糕"},{value:"选项2",text:"双皮奶"},{value:"选项3",text:"蚵仔煎"},{value:"选项4",text:"龙须面"},{value:"选项5",text:"北京烤鸭"}]}},watch:{value:function(s){console.log(s)}}},h={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{data:s.options,size:"large"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},l={data:function(){return{value:[],options:[{value:"选项1",text:"黄金糕"},{value:"选项2",text:"双皮奶"},{value:"选项3",text:"蚵仔煎"},{value:"选项4",text:"龙须面"},{value:"选项5",text:"北京烤鸭"}]}},watch:{value:function(s){console.log(s)}}},n={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{data:s.options},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},v={data:function(){return{value:[],options:[{value:"选项1",text:"黄金糕"},{value:"选项2",text:"双皮奶"},{value:"选项3",text:"蚵仔煎"},{value:"选项4",text:"龙须面"},{value:"选项5",text:"北京烤鸭"}]}},watch:{value:function(s){console.log(s)}}},r={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{filter:"",data:s.options},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},e={data:function(){return{value:[],options:[{text:"Alabama",value:"Alabama"},{text:"Alaska",value:"Alaska"},{text:"Arizona",value:"Arizona"},{text:"Arkansas",value:"Arkansas"},{text:"California",value:"California"},{text:"Colorado",value:"Colorado"},{text:"Connecticut",value:"Connecticut"},{text:"Delaware",value:"Delaware"},{text:"Florida",value:"Florida"},{text:"Georgia",value:"Georgia"},{text:"Hawaii",value:"Hawaii"},{text:"Idaho",value:"Idaho"},{text:"Illinois",value:"Illinois"}]}},watch:{value:function(s){console.log(s)}},methods:{filterMethod:function(s,t){return s.filter(function(s){return s.value.toLowerCase().indexOf(t.toLowerCase())>-1&&s})}}},_={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{filter:"","filter-method":s.filterMethod,data:s.options,size:"huge"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},c={components:{C5278ac:a(0)(i,h,!1,null,null,null).exports,Cf3d892:a(0)(l,n,!1,null,null,null).exports,C3c7041:a(0)(v,r,!1,null,null,null).exports,C505ab3:a(0)(e,_,!1,null,null,null).exports}},p={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("选择扩展 MultiSelect")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("h3",[this._v("大小扩展")]),t("div",{staticClass:"u-example"},[t("C5278ac")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"options"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": [],\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("options")]),this._v(": [{\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项1'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'黄金糕'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项2'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'双皮奶'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项3'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'蚵仔煎'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项4'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'龙须面'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项5'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'北京烤鸭'")]),this._v(",\n            }],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("watch")]),this._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newValue);\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("方法")]),t("div",{staticClass:"u-example"},[t("Cf3d892")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"options"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": [],\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("options")]),this._v(": [{\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项1'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'黄金糕'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项2'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'双皮奶'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项3'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'蚵仔煎'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项4'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'龙须面'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项5'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'北京烤鸭'")]),this._v(",\n            }],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("watch")]),this._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newValue);\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("div",{staticClass:"u-example"},[t("C3c7041")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("filter")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"options"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": [],\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("options")]),this._v(": [{\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项1'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'黄金糕'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项2'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'双皮奶'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项3'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'蚵仔煎'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项4'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'龙须面'")]),this._v("\n            }, {\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'选项5'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'北京烤鸭'")]),this._v(",\n            }],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("watch")]),this._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newValue);\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h4",[this._v("自定义过滤方法")]),t("div",{staticClass:"u-example"},[t("C505ab3")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("filter")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":filter-method")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"filterMethod"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"options"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-multi-select")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": [],\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("options")]),this._v(": [\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Alabama'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Alabama'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Alaska'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Alaska'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Arizona'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Arizona'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Arkansas'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Arkansas'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'California'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'California'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Colorado'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Colorado'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Connecticut'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Connecticut'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Delaware'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Delaware'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Florida'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Florida'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Georgia'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Georgia'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Hawaii'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Hawaii'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Idaho'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Idaho'")]),this._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Illinois'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Illinois'")]),this._v(" },\n            ],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("watch")]),this._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newValue);\n        }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        filterMethod(data,query) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("const")]),this._v(" tdata = data.filter("),t("span",{attrs:{class:"hljs-function"}},[this._v("("),t("span",{attrs:{class:"hljs-params"}},[this._v("item")]),this._v(") =>")]),this._v(" {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("if")]),this._v("(item.value.toLowerCase().indexOf(query.toLowerCase()) > "),t("span",{attrs:{class:"hljs-number"}},[this._v("-1")]),this._v(")\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" item;\n                "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("else")]),this._v("\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" "),t("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(";\n            });\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" tdata;\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("Select API")]),t("h3",[this._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Attr/Prop")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("data")]),t("td",[this._v("Array<{ text, value }>")]),t("td"),t("td",[this._v("Data书写方式中的数据列表")])]),t("tr",[t("td",[this._v("value.sync, v-model")]),t("td",[this._v("Array")]),t("td"),t("td",[this._v("当前选择的值")])]),t("tr",[t("td",[this._v("field")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'text'")])]),t("td",[this._v("显示文本字段")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])]),t("tr",[t("td",[this._v("size")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("normal normal")])]),t("td",[this._v("控制宽高属性，第一个值表示高度属性，第二值表示宽度，值有samll,normal,large,huage 四个值可以互相组合")])]),t("tr",[t("td",[this._v("filter")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("支持输入，搜索匹配项")])]),t("tr",[t("td",[this._v("filter-method")]),t("td",[this._v("Function")]),t("td",[this._v("``")]),t("td",[this._v("自定义输入搜索的方法")])])])]),t("h3",[this._v("Events")]),t("h4",[this._v("@select")]),t("p",[this._v("选择某一项前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.selected")]),t("td",[this._v("Object")]),t("td",[this._v("选择项对象")])]),t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Any")]),t("td",[this._v("选择项的值")])])])]),t("h4",[this._v("@close")]),t("p",[this._v("点击选中项的关闭图标")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.index")]),t("td",[this._v("Number")]),t("td",[this._v("点击选择项的索引")])]),t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Array")]),t("td",[this._v("选择项的值")])])])]),t("h4",[this._v("@toggle")]),t("p",[this._v("选择项展示和隐藏触发函数")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.open")]),t("td",[this._v("Boolean")]),t("td",[this._v("值表示展示还是隐藏")])])])])])},staticRenderFns:[]},o=a(0)(c,p,!1,null,null,null);t.default=o.exports}});